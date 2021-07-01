# Solferino CI/CD Pipeline

A staging pipeline for Solferino WordPress website.

## Purpose

This pipeline aims to containerize the Solferino WordPress website with common features and settings that apply to other NS sites. Combined practices of docker and CI/CD are implemented. By using this pipeline, we are aiming to enforce automation in the building, testing, and deployment of our containerized version of the WordPress application.

## Table of Contents

- [Software/Tools Used](#softwaretools-used)
- [Project File Structure](#project-file-structure)
- [Docker Services Architecture](#docker-services-architecture)
  - [Traefik](#traefik)
  - [Wordpress](#wordpress)
  - [MySQL](#mysql)
  - [dbBackup](#dbbackup)
- [CI/CD Workflow](#cicd-workflow)
  - [Essential Environment Variables in CI](#essential-environment-variables-in-circleci)
  - [Detailed CI/CD Process](#detailed-cicd-process)
- [Staging Server Configuration](#staging-server-configuration)
  - [Prerequisites](#prerequisities)
  - [Extra Files for Docker Services to Run](#extra-files-for-docker-services-to-run)
  - [Start Docker Services](#start-docker-services)
  - [Access Running Wordpress Website](#access-running-wordpress-website)
- [Data Backup](#data-backup)
  - [Acknowledgement](#acknowledgement)
  - [Usage](#usage)
  - [Periodic Backups](#periodic-backups)
  - [S3 Bucket Configuration](#s3-bucket-configuration)

## Software/Tools Used

1.  [CircleCI](https://circleci.com/)
2.  [Traefik](https://doc.traefik.io/traefik/)
3.  [Wordpress Apache docker image](https://hub.docker.com/_/wordpress)

## Project File Structure

- `docker-compose.yml`

  `docker-compose.yml` defines the services to run in the docker container. According to [Docker Services Architecture](#docker-services-architecture), four services are included:

  - `traefik`: Serves as the reverse proxy, based on traefik official image v2.4
  - `mysql`: Database service, based on latest MySQL official image
  - `wordpress`: WordPress web application service, based on latest WordPress official image (Apache included)
  - `dbBackup`: Customized container in charge of data and schema backup

- `.circleci`

  `.circleci` is the folder to store CircleCI configuration files.

  - `config.yml`: Specifies commands to execute in CI and criteria to decide whether build tests and deployment process are passed or failed

- `.init`

  `.init` is the folder to store MySQL database initialization files.

  - `dumpfile.sql.gz`: Specifies SQL commands to initialize the data inside MySQL container

- `dbBackup`

  `dbBackup` is the folder to store configuration and essential scripts of customized data backup containers.

  - `Dockerfile`: Defines the instructions to build a data backup container
  - `backup.sh`: Script of the commands to make dump file from SQL server and make a backup in AWS S3 bucket. The dump files consist of user data and also the schema of the whole database. This container allows developers to build the SQL database from a blank database or with existing data.
  - `install.sh`: A script defines the packages to be installed in the image.
  - `run.sh`: A script defines when the command to run when the docker image is built.

## Docker Services Architecture

The following four containers will be running together:

### Traefik

When an HTTP request comes in, traefik will intercept the request and forward it to the WordPress service for processing.

### Wordpress

WordPress is the main application service. It processes the HTTP request forwarded by traefik. Also, the WP-Content folder is mounted to the WordPress container for themes, plugins, and user uploads.

### MySQL

MySQL service is for data storage. It stores data that support the WordPress service.

### dbBackup

DbBackup service is for data backup. It backs up the data dumped from MySQL service and restores data to MySQL database when necessary. Basically, it periodically backs up data from both MySQL and WP-Content to Amazon S3.

![Image of Docker Services](/staging/docker-services-diagram.jpg)

## CI/CD Workflow

Once any code changes were pushed to the `dev` branch, CircleCI will be automatically triggered to build updates and conduct unit tests. Next, the code changes will be deployed to our staging server, where integration tests and performance tests run.

![Image of CI/CD](/staging/cicd-pipeline-diagram.jpg)

### Essential Environment Variables in CircleCI

- `GITHUB_TOKEN` (GitHub access token for operations on the Github repository, eg. create new pull requests)

- `SSH_USER` (staging server user for ssh access)

- `SSH_HOST` (staging server host for ssh access)

- `mysql_db` (database name for MySQL docker service)

- `mysql_user` (username for MySQL docker service)

- `mysql_pw` (user password for MySQL docker service)

- `mysql_root_pw` (root password for MySQL docker service)

- `id` (AWS user id for backup service)

- `secret` (AWS user secret for backup service)

### Detailed CI/CD Process

For the whole CI/CD workflow, we have two jobs set up in CircleCI:

1. **build**:

   This job mainly tests whether the docker services can be built and running properly. If tests are passed, a new pull request will be created to merge updated code to the `master` branch. The steps of `build` job are as followed:

   - **checkout**: This step checks out the code from the GitHub repository for CircleCI to use.

   - **Test docker-compose build**: This step checks whether the docker services can be built and running successfully.

   - **Test database connection**: This step checks whether the MySQL database service is running properly and can be accessed.

   - **gh/setup**: This step sets up the environment for GitHub CLI commands.

   - **Create new pull request**: This step creates a new pull request from the `dev` branch to the `master` branch if necessary.

2. **deploy**:

   This job mainly focuses on the deployment of the latest code changes. It depends on the previous `build` job. The steps of the `deploy` job are as followed:

   - **add_ssh_keys**: This step prepares the ssh access to the staging server.

   - **Deploy to LightSail staging server**: In this step, firstly, access the staging server via ssh. Then, pull the latest code updates from the GitHub repository. Finally, update docker services.

## Staging Server Configuration

### Prerequisities

1. docker

   Please ensure docker is installed and running properly. Or [Install Docker](https://docs.docker.com/get-docker/)

   Check docker installation:

   ```console
   $ docker -v
   ```

2. docker-compose

   Please ensure docker-compose is installed. Or [Install docker-compose](https://docs.docker.com/compose/install/)

   Check docker-compose installation:

   ```console
   $ docker-compose -v
   ```

3. Firewall settings

   Please ensure the following TCP ports are open to the Internet:

   - Port 22 (for ssh access)

   - Port 80 (for HTTP access)

   - Port 443 (for HTTPS access)

### Extra Files for Docker Services to Run

1.  `.env` file

    `.env` file is mandatory for MySQL database service to run. Please add the following credentials variables in the `.env` file. Then, put the `.env` file in the root directory of this project.

        - `mysql_db` (database name)

        - `mysql_user` (username)

        - `mysql_pw` (user password)

        - `mysql_root_pw` (root password)

        - `id` (AWS user id)

        - `secret` (aws user secret)

    Example `.env` file:

    ```
    mysql_db=db
    mysql_user=user
    mysql_pw=userpw
    mysql_root_pw=rootpw
    id=someid
    secret=TheSecretOfTheUser
    ```

2.  `wp-content` folder

    `wp-content` folder contains themes, plugins, and user uploads used by the WordPress application. You can enable your WordPress themes, plugins, and user uploads by putting your `wp-content` folder in the root directory of this project.

### Start Docker Services

To start docker services and run WordPress website, simply execute the following commands in the command line:

```console
$ docker-compose up -d
```

### Access Running WordPress Website

After docker services are started successfully, you can access the WordPress website via (https://staging-sa.actionit.dev) and access WordPress admin console via (https://staging-sa.actionit.dev/wp-admin)

## Data Backup

### Acknowledgement

The files to build the backup container have used part code from (https://github.com/schickling/dockerfiles) and (https://github.com/fradelg/docker-mysql-cron-backup).

### Usage

The function of the backup container is making the backup of data and schema from the MySQL database and store it in the AWS S3 bucket.
The backup process is achieved by using the `mysqldump` command of MYSQL. There is two back up process, one is for all the user data from the database. By using this one, developers can restore the whole website. The other one is the schema file which does not consist of user data. By using this one, developers can restore an empty website.

The environment variables:

- `MYSQLDUMP_OPTIONS` `mysqldump` options (default: --skip-lock-tables --single-transaction)
- `MYSQLDUMP_DATABASE` list of databases you want to backup (default: --all-databases)
- `MYSQL_HOST` the MySQL host _required_
- `MYSQL_PORT` the MySQL port (default: 3306)
- `MYSQL_USER` the MySQL user _required_
- `MYSQL_PASSWORD` the MySQL password _required_
- `S3_ACCESS_KEY_ID` your AWS access key _required_
- `S3_SECRET_ACCESS_KEY` your AWS secret key _required_
- `S3_BUCKET` your AWS S3 bucket path _required_
- `S3_PREFIX` path prefix in your bucket (default: 'backup')
- `S3_FILENAME` a consistent filename to overwrite with your backup. If not set will use a timestamp.
- `S3_REGION` the AWS S3 bucket region (default: us-east-2)
- `MULTI_FILES` Allow having one file per database if set `yes` (default: no)
- `SCHEDULE` backup schedule time, see explanations below

### Periodic Backups

To change the backup frequency, you can modify the `SCHEDULE` environment variable using the cron job format.
Cron job use five or six variables format, For example, `SCHEDULE=10 * * * * *` means to make the schedule and data backup every 10 mins or `SCHEDULE=0 0 * * * *` means to make the backup once an hour, at the beginning of the hour. More information can be found in the cron document (https://pkg.go.dev/github.com/robfig/cron)

### S3 Bucket Configuration

#### S3 Lifecycle

(https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html)

- In the bucket list, we can select the bucket we are using for backup, then select **management** tab and chose to Create a lifecycle rule. The configuration now applies to all the objects in the bucket.
- There are several options in the lifecycle rule. The configuration now is to Permanently delete previous versions of objects in a 90 days cycle
- S3 bucket policy
  If we need to modify which user can access the bucket, we need to set the Bucket policy which is in the **Permissions** tab.
  <br>The policy now allows the user that created the website application to write to the bucket. Also, the Bucket and objects are not public.

<!-- ### Backup container selection -->
