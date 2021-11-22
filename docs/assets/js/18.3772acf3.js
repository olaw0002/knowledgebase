(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{373:function(e,t,s){"use strict";s.r(t);var r=s(45),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"solferino-ci-cd-pipeline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solferino-ci-cd-pipeline"}},[e._v("#")]),e._v(" Solferino CI/CD Pipeline")]),e._v(" "),s("p",[e._v("A staging pipeline for Solferino Wordpress website.")]),e._v(" "),s("h2",{attrs:{id:"purpose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),s("p",[e._v("This CI/CD pipeline aims to containerize Solferino WordPress website with common features and settings that apply to other NS sites. Combined practices of docker and CI/CD are implemented. By using this pipeline, we are aiming to enforce automation in building, testing and deployment of our containerized version of wordpress application on both staging and development servers.")]),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#softwaretools-used"}},[e._v("Software/Tools Used")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#project-file-structure"}},[e._v("Project File Structure")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#staging-server-docker-services-architecture"}},[e._v("Staging Server's Docker Services Architecture")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#traefik"}},[e._v("Traefik")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#wordpress"}},[e._v("Wordpress")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#mysql"}},[e._v("MySQL")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#production-server-docker-services-architecture"}},[e._v("Production Server's Docker Services Architecture")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#dbbackup"}},[e._v("dbBackup")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#cicd-workflow"}},[e._v("CI/CD Workflow")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#essential-environment-variables-in-circleci"}},[e._v("Essential Environment Variables in CI")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#detailed-cicd-process"}},[e._v("Detailed CI/CD Process")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#staging-and-production-server-base-configuration"}},[e._v("Production and Staging Server Configuration")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#prerequisities"}},[e._v("Prerequisites")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#extra-files-for-docker-services-to-run"}},[e._v("Extra Files for Docker Services to Run")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#start-docker-services"}},[e._v("Start Docker Services")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#access-running-wordpress-website"}},[e._v("Access Running Wordpress Website")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#staging-server-data-backup"}},[e._v("Staging Server's Data Backup")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#usage"}},[e._v("Usage")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#production-server-data-backup"}},[e._v("Production Server's Data Backup")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#acknowledgement"}},[e._v("Acknowledgement")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#usage"}},[e._v("Usage")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#periodic-backups"}},[e._v("Periodic Backups")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#s3-bucket-configuration"}},[e._v("S3 Bucket Configuration")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#dashboard"}},[e._v("Dashboard")])])]),e._v(" "),s("h2",{attrs:{id:"software-tools-used"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#software-tools-used"}},[e._v("#")]),e._v(" Software/Tools Used")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://circleci.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CircleCI"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://doc.traefik.io/traefik/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Traefik"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://hub.docker.com/_/wordpress",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wordpress Apache docker image"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"project-file-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-file-structure"}},[e._v("#")]),e._v(" Project File Structure")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("staging-docker-compose.yml")])]),e._v(" "),s("p",[s("code",[e._v("staging-docker-compose.yml")]),e._v(" defines containers to be run inside the staging server. According to "),s("a",{attrs:{href:"#staging-server-docker-services-architecture"}},[e._v("Staging Server Docker Services Architecture")]),e._v(", three services are included:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("traefik")]),e._v(": Serves as the reverse proxy, based on traefik official image v2.4.")]),e._v(" "),s("li",[s("code",[e._v("mysql")]),e._v(": Database service, based on latest mysql official image.")]),e._v(" "),s("li",[s("code",[e._v("wordpress")]),e._v(": Wordpress web application service, based on Wordpress 5.7.1 official image (Apache included).")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("production-docker-compose.yml")])]),e._v(" "),s("p",[s("code",[e._v("production-docker-compose.yml")]),e._v(" defines containers to be run inside the staging server. According to "),s("a",{attrs:{href:"#production-server-docker-services-architecture"}},[e._v("Production Server Docker Services Architecture")]),e._v(", four services are included:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("traefik")]),e._v(": Serves as the reverse proxy, based on traefik official image v2.4.")]),e._v(" "),s("li",[s("code",[e._v("mysql")]),e._v(": Database service, based on latest mysql official image.")]),e._v(" "),s("li",[s("code",[e._v("wordpress")]),e._v(": Wordpress web application service, based on Wordpress 5.7.1 official image (Apache included).")]),e._v(" "),s("li",[s("code",[e._v("dbbackup")]),e._v(": Database backup container to periodically backup database from the production server.")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v(".circleci")])]),e._v(" "),s("p",[s("code",[e._v(".circleci")]),e._v(" is the folder to store CircleCI configuration files.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("config.yml")]),e._v(": Specifies commands to execute in CI and criteria to decide whether build tests and deployment process are passed or failed")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v(".init")])]),e._v(" "),s("p",[s("code",[e._v(".init")]),e._v(" is the folder to store mysql database initialization files. There will be frequent changes inside this folder, happening during the deployment or synchronization process between production and staging server.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("dumpfile.sql.gz")]),e._v(": Initial DB file that specifies sql commands, to initialize the tables and data inside mysql container.")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("dbBackup")])]),e._v(" "),s("p",[s("code",[e._v("dbBackup")]),e._v(" is the folder to store configuration and essential scripts for staging and production's server backup There are two sub-folders:")]),e._v(" "),s("ul",[s("li",[e._v("production\n"),s("ul",[s("li",[s("code",[e._v("Dockerfile")]),e._v(": Defines the instructions to build data backup container. It consists of several scripts like backupDB.sh, install.sh, and run.sh to be run inside the backup container.")]),e._v(" "),s("li",[s("code",[e._v("backupDB.sh")]),e._v(": Script of the commands to make dump file from MySQL server and make backup in AWS S3 bucket, under /production folder. The dump files consist of user data and also the schema of the whole database.")]),e._v(" "),s("li",[s("code",[e._v("install.sh")]),e._v(": A script defines the packages to be installed in the image.")]),e._v(" "),s("li",[s("code",[e._v("run.sh")]),e._v(": A script defines when the command to run when the docker image is built.")]),e._v(" "),s("li",[s("code",[e._v("root")]),e._v(": Define several cron-jobs for scheduled backup inside the production container.")])])]),e._v(" "),s("li",[e._v("staging\n"),s("ul",[s("li",[s("code",[e._v("backupStagingDB.sh")]),e._v(": Database backup script that is run everytime there is a deployment from the staging to the production server (run by config.yml). The backup file itself is stored inside the AWS S3 bucket, under /staging/db folder.")]),e._v(" "),s("li",[s("code",[e._v("backupStagingWP.sh")]),e._v(": Wordpress backup script that is run alongside "),s("code",[e._v("backupStagingDB.sh")]),e._v(". The backup wp-content file itself is stored under /staging/wp folder under AWS S3 bucket.")])])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v(".gitignore")])]),e._v(" "),s("p",[s("code",[e._v(".gitignore")]),e._v(" is a file that contains any file names by the git track.")])])]),e._v(" "),s("h2",{attrs:{id:"staging-server-docker-services-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staging-server-docker-services-architecture"}},[e._v("#")]),e._v(" Staging Server Docker Services Architecture")]),e._v(" "),s("p",[e._v("The following four containers will be running together:")]),e._v(" "),s("h3",{attrs:{id:"traefik"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traefik"}},[e._v("#")]),e._v(" Traefik")]),e._v(" "),s("p",[e._v("Traefik acts as a reverse proxy. When an HTTP request comes in, traefik will intercept the request and forward it to the wordpress service for processing.")]),e._v(" "),s("h3",{attrs:{id:"wordpress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wordpress"}},[e._v("#")]),e._v(" Wordpress")]),e._v(" "),s("p",[e._v("Wordpress is the main application service. It processes the HTTP request forwarded by traefik. Also, WP-Content folder is mounted to the wordpress container for themes, plugins and user uploads.")]),e._v(" "),s("h3",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" MySQL")]),e._v(" "),s("p",[e._v("MySQL service is for data storage. It stores data which support for wordpress service. Meanwhile, the container mounts every SQL file that is put inside the .init folder.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/staging/staging-architecture.jpeg",alt:"Image of Staging Server's Workflow"}})]),e._v(" "),s("h2",{attrs:{id:"production-server-docker-services-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#production-server-docker-services-architecture"}},[e._v("#")]),e._v(" Production Server Docker Services Architecture")]),e._v(" "),s("p",[e._v("Similar containers as Staging server are running inside the production server. However, there is an additional service running alongside primary containers:")]),e._v(" "),s("h3",{attrs:{id:"dbbackup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dbbackup"}},[e._v("#")]),e._v(" dbBackup")]),e._v(" "),s("p",[e._v("DbBackup service is for the data backup. It backs up the data dumped from MySQL service in the production server. Technically, it periodically backs up MySQL database via SQLdump and transfers it to the Amazon S3.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/staging/production-architecture.jpeg",alt:"Image of Production Server's Workflow"}})]),e._v(" "),s("h2",{attrs:{id:"ci-cd-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd-workflow"}},[e._v("#")]),e._v(" CI/CD Workflow")]),e._v(" "),s("p",[e._v("Once any code changes were pushed to the "),s("code",[e._v("dev")]),e._v(" branch, CircleCI will be automatically triggered to build updates and conduct unit tests. Next, the code changes will be deployed to our staging server, where integration tests and performance tests run.\nOn the other hand, There are two procedures that can be done from the staging to the production server. First, any changes pushed to the "),s("code",[e._v("master")]),e._v(" branch will trigger the automatic deployment pipeline to the production server. Meanwhile, the production server's production pipeline and content synchronization between the staging and production environment can also be triggered by utilising the interactive dashboard.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/staging/CICD-workflow.jpeg",alt:"Image of CI/CD"}})]),e._v(" "),s("h3",{attrs:{id:"essential-environment-variables-in-circleci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#essential-environment-variables-in-circleci"}},[e._v("#")]),e._v(" Essential Environment Variables in CircleCI")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("GITHUB_TOKEN")]),e._v(" (github access token for operations on the github repository, eg. create new pull requests)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("MYSQL_PROD_PASSWORD")]),e._v(" (mysql database's password for the production server)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("MYSQL_PROD_DATABASE")]),e._v(" (mysql database's database name for the production server)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("MYSQL_PROD_USER")]),e._v(" (mysql database's user name for the production server)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("MYSQL_STAGING_PASSWORD")]),e._v(" (mysql database's password for the staging server)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("MYSQL_STAGING_DATABASE")]),e._v(" (mysql database's database name for the staging server)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("MYSQL_STAGING_PORT")]),e._v(" (mysql database's port for the staging server)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("MYSQL_STAGING_USER")]),e._v(" (mysql database's user name for the staging server)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("S3_ACCESS_KEY_ID")]),e._v(" (access key ID for the S3 bucket)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("S3_REGION")]),e._v(" (region name for the S3 bucket)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("S3_SECRET_ACCESS_KEY")]),e._v(" (access key secret for the S3 bucket)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SSH_USER")]),e._v(" (staging server user for ssh access)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SSH_HOST")]),e._v(" (staging server host for ssh access)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SSH_PROD_HOST")]),e._v(" (production server host for ssh access)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mysql_db")]),e._v(" (database name for mysql docker service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mysql_user")]),e._v(" (username for mysql docker service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mysql_pw")]),e._v(" (user password for mysql docker service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mysql_root_pw")]),e._v(" (root password for mysql docker service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("id")]),e._v(" (aws user id for backup service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("secret")]),e._v(" (aws user secret for backup service)")])])]),e._v(" "),s("h3",{attrs:{id:"detailed-ci-cd-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detailed-ci-cd-process"}},[e._v("#")]),e._v(" Detailed CI/CD Process")]),e._v(" "),s("p",[e._v("For the whole CI/CD workflow, we have five jobs set up in CircleCI:")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("staging-build")]),e._v(":")]),e._v(" "),s("p",[e._v("This job mainly tests whether the docker services can be built and running properly prior to the deployment process to the staging server.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("checkout")]),e._v(": This step checks out the code from the github repository for CircleCI to use.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Test staging-docker-compose build")]),e._v(": This step checks whether the docker services can be built and running successfully.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Test database connection")]),e._v(": This step checks whether the mysql database service is running properly and can be accessed.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("gh/setup")]),e._v(": This step sets up environment for github cli commands.")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("staging-deploy")]),e._v(":")]),e._v(" "),s("p",[e._v("This job mainly focuses on the deployment of latest code changes inside the "),s("code",[e._v("dev")]),e._v(" branch. It depends on the previous "),s("code",[e._v("build")]),e._v(" job. The steps of "),s("code",[e._v("deploy")]),e._v(" job are as followed:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("add_ssh_keys")]),e._v(": This step prepares the ssh access to the staging server.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Deploy to lightsail staging server")]),e._v(": In this step, firstly, access the staging server via ssh. Then, pull the latest code updates from GitHub repository. Finally, update docker services.")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("production-build")]),e._v(":")]),e._v(" "),s("p",[e._v("This job mainly tests whether the docker services can be built and running properly prior to the deployment process to the production server.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("checkout")]),e._v(": This step checks out the code from the github repository for CircleCI to use.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Test production-docker-compose build")]),e._v(": This step checks whether the docker services can be built and running successfully.")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("production-deploy")]),e._v(":")]),e._v(" "),s("p",[e._v("This job mainly focuses on the deployment of latest code changes inside the "),s("code",[e._v("master")]),e._v(" branch. It depends on the previous "),s("code",[e._v("build")]),e._v(" job. The steps of "),s("code",[e._v("deploy")]),e._v(" job are as followed:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("add_ssh_keys")]),e._v(": This step prepares the ssh access to the production server.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Backup the database in the staging server")]),e._v(": This step allows the staging's DB backup script to be run, and latest changes of the staging server's database will be recorded in the S3 bucket")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Backup the WP-content in the staging server")]),e._v(": This step allows the staging's wp-content backup script to be run, and latest changes of the staging server's wordpress content will be recorded in the S3 bucket")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Migrate sql and wp-content from staging to the production server")]),e._v(": This step transfers latest contents and database from the staging to the production for the production's deployment purpose")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Deploy to lightsail production server")]),e._v(": In this step, firstly, access the staging server via ssh. Then, pull the latest code updates from GitHub repository. Finally, update docker services.")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("sync-prod-staging")]),e._v(" (Under development):")]),e._v(" "),s("p",[e._v("This job mainly focuses on the synchronization process between the production and the staging server. The workflow itself is not triggered manually; instead, it is triggered upon client request by using the Solferino Interactive Dashboard. In general, this workflow will be triggered first to synchronize any changes between the staging and production servers (latest comments, posts from the production will be pulled into the staging to avoid development conflicts), before clients make any changes to the staging server.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Turn off the staging server for DB synchronization")]),e._v(": This step turns off all staging server's services before the synchronization process happens.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Synchronize contents from production to the staging server")]),e._v(": This step transfers all database and wp-contents from the production server to the staging server.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Update content in the staging server")]),e._v(": This step remove old contents from the staging server, replacing them with the latest contents obtained from the production server.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Turn on the staging server after synchronization")]),e._v(": This final step restarts all the services in the staging server, and lets those services to mount the updated contents.")])])])])]),e._v(" "),s("h2",{attrs:{id:"staging-and-production-server-base-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staging-and-production-server-base-configuration"}},[e._v("#")]),e._v(" Staging and Production Server Base Configuration")]),e._v(" "),s("h3",{attrs:{id:"prerequisities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisities"}},[e._v("#")]),e._v(" Prerequisities")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("docker")]),e._v(" "),s("p",[e._v("Please ensure docker is installed and running properly. Or "),s("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install docker"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Check docker installation:")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker -v\n")])])])]),e._v(" "),s("li",[s("p",[e._v("docker-compose")]),e._v(" "),s("p",[e._v("Please ensure docker-compose is installed. Or "),s("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install docker-compose"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Check docker-compose installation:")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker-compose -v\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Firewall settings")]),e._v(" "),s("p",[e._v("Please ensure the following TCP ports are open to the Internet:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Port 22 (for ssh access)")])]),e._v(" "),s("li",[s("p",[e._v("Port 80 (for http access)")])]),e._v(" "),s("li",[s("p",[e._v("Port 443 (for https access)")])])])])]),e._v(" "),s("h3",{attrs:{id:"extra-files-for-docker-services-to-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extra-files-for-docker-services-to-run"}},[e._v("#")]),e._v(" Extra Files for Docker Services to Run")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v(".env")]),e._v(" file")]),e._v(" "),s("p",[s("code",[e._v(".env")]),e._v(" file is mandatory for mysql database service to run. Please add the following credentials variables in "),s("code",[e._v(".env")]),e._v(" file. Then, put "),s("code",[e._v(".env")]),e._v(" file in the root directory of this project.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("- `mysql_db` (database name)\n\n- `mysql_user` (username)\n\n- `mysql_pw` (user password)\n\n- `mysql_root_pw` (root password)\n\n- `id` (aws user id)\n\n- `secret` (aws user secret)\n")])])]),s("p",[e._v("Example "),s("code",[e._v(".env")]),e._v(" file:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql_db=db\nmysql_user=user\nmysql_pw=userpw\nmysql_root_pw=rootpw\nid=someid\nsecret=TheSecretOfTheUser\n")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("wp-content")]),e._v(" folder")]),e._v(" "),s("p",[s("code",[e._v("wp-content")]),e._v(" folder contains themes, plugins and user uploads used by the wordpress application. You can enable your own wordpress themes, plugins and user uploads by putting your "),s("code",[e._v("wp-content")]),e._v(" folder in the root directory of this project.")])])]),e._v(" "),s("h3",{attrs:{id:"start-docker-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-docker-services"}},[e._v("#")]),e._v(" Start Docker Services")]),e._v(" "),s("p",[e._v("To start docker services and run wordpress website, simply execute following commands in the command line:")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker-compose -f [your_desired_docker_compose_file] up -d\n")])])]),s("h3",{attrs:{id:"stop-docker-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-docker-services"}},[e._v("#")]),e._v(" Stop Docker Services")]),e._v(" "),s("p",[e._v("To stop docker services and run wordpress website, simply execute following commands in the command line:")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker-compose -f [your_desired_docker_compose_file] down\n")])])]),s("h3",{attrs:{id:"navigate-through-a-docker-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigate-through-a-docker-service"}},[e._v("#")]),e._v(" Navigate through a docker service")]),e._v(" "),s("p",[e._v("to access one of the docker service, simply execute the following command:")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker exec -it [docker_service_name] bash\n")])])]),s("h3",{attrs:{id:"access-running-wordpress-website"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-running-wordpress-website"}},[e._v("#")]),e._v(" Access Running Wordpress Website")]),e._v(" "),s("p",[e._v("After docker services are started successfully, you can access the wordpress website via (https://staging-sa.actionit.dev) for the staging server and (https://production-sa.actionit.dev/) for the production server. Meanwhile, the staging server's wordpress admin console can be accessed via (https://staging-sa.actionit.dev/wp-admin)")]),e._v(" "),s("h2",{attrs:{id:"staging-server-data-backup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staging-server-data-backup"}},[e._v("#")]),e._v(" Staging Server Data Backup")]),e._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("The backup process is required in the staging server in order to save the content updates. If there are failures happened in the staging server, then the server can be restored by using the previously saved contents. Meanwhile, the backup process happens everytime there is a deployment from the staging to the production server, and the backup process itself includes saving both updated wp-content and mysql database to the S3 bucket (under prefix /staging).")]),e._v(" "),s("p",[e._v("The environment variables (included in the circleCI):")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("S3_ACCESS_KEY_ID")]),e._v(" "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("$S3_SECRET_ACCESS_KEY")]),e._v(" "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("$S3_REGION")]),e._v(" "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("$MYSQL_STAGING_PORT")]),e._v(" (default: 3306)")]),e._v(" "),s("li",[s("code",[e._v("$MYSQL_STAGING_USER")]),e._v(" (default: 'wpadmin')")]),e._v(" "),s("li",[s("code",[e._v("$MYSQL_STAGING_PASSWORD")]),e._v(" "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("$MYSQL_STAGING_DATABASE")]),e._v(" (default: 'wp')")])]),e._v(" "),s("h2",{attrs:{id:"production-server-data-backup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#production-server-data-backup"}},[e._v("#")]),e._v(" Production Server Data Backup")]),e._v(" "),s("h3",{attrs:{id:"acknowledgement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgement"}},[e._v("#")]),e._v(" Acknowledgement")]),e._v(" "),s("p",[e._v("The files to build the backup container has used part code from (https://github.com/schickling/dockerfiles) and (https://github.com/fradelg/docker-mysql-cron-backup).")]),e._v(" "),s("h3",{attrs:{id:"usage-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("The function of the backup container is making the backup of data and schema from mysql database and store it in AWS S3 bucket.\nThe backup process is achieved by using the "),s("code",[e._v("mysqldump")]),e._v(" commond of MYSQL. There are two back up process, one is for all the user data from the database. By using this one, developer can restore the whole website. The other one is the schema file which does not consist user data. By using this one, developer can restore an empty website. Meanwhile, the production server periodically backups its contents on a weekly basis (every Sunday, 00:00 UTC).")]),e._v(" "),s("p",[e._v("The environment variables:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("MYSQLDUMP_OPTIONS")]),e._v(" mysqldump options (default: --skip-lock-tables --single-transaction)")]),e._v(" "),s("li",[s("code",[e._v("MYSQLDUMP_DATABASE")]),e._v(" list of databases you want to backup (default: --all-databases)")]),e._v(" "),s("li",[s("code",[e._v("MYSQL_HOST")]),e._v(" the mysql host "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("MYSQL_PORT")]),e._v(" the mysql port (default: 3306)")]),e._v(" "),s("li",[s("code",[e._v("MYSQL_USER")]),e._v(" the mysql user "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("MYSQL_PASSWORD")]),e._v(" the mysql password "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("S3_ACCESS_KEY_ID")]),e._v(" your AWS access key "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("S3_SECRET_ACCESS_KEY")]),e._v(" your AWS secret key "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("S3_BUCKET")]),e._v(" your AWS S3 bucket path "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("S3_PREFIX")]),e._v(" path prefix in your bucket (default: 'backup')")]),e._v(" "),s("li",[s("code",[e._v("S3_FILENAME")]),e._v(" a consistent filename to overwrite with your backup. If not set will use a timestamp.")]),e._v(" "),s("li",[s("code",[e._v("S3_REGION")]),e._v(" the AWS S3 bucket region (default: us-eest-2)")]),e._v(" "),s("li",[s("code",[e._v("MULTI_FILES")]),e._v(" Allow to have one file per database if set "),s("code",[e._v("yes")]),e._v(" (default: no)")]),e._v(" "),s("li",[s("code",[e._v("SCHEDULE")]),e._v(" backup schedule time, see explainatons below")])]),e._v(" "),s("h3",{attrs:{id:"periodic-backups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#periodic-backups"}},[e._v("#")]),e._v(" Periodic Backups")]),e._v(" "),s("p",[e._v("To change the backup frequency, you can modify the "),s("code",[e._v("SCHEDULE")]),e._v(" environment variable using cron job format.\nIn this project, five-variable cron job format is used, For example, "),s("code",[e._v("SCHEDULE=10 * * * *")]),e._v(" means to make the schedule and data backup every 10 mins. More information can be found in cron document (https://pkg.go.dev/github.com/robfig/cron)")]),e._v(" "),s("h3",{attrs:{id:"s3-bucket-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s3-bucket-configuration"}},[e._v("#")]),e._v(" S3 Bucket Configuration")]),e._v(" "),s("h4",{attrs:{id:"s3-lifecycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s3-lifecycle"}},[e._v("#")]),e._v(" S3 Lifecycle")]),e._v(" "),s("p",[e._v("(https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html)")]),e._v(" "),s("ul",[s("li",[e._v("In bucket list, we can select the bucket we are using for backup, then select "),s("strong",[e._v("management")]),e._v(" tab and chose Create lifecycle rule. The configuration now is apply to all the objects in the bucket.")]),e._v(" "),s("li",[e._v("There are several options in the lifecycle rule. The configuration now is to Permanently delete previous versions of objects in a 90 days cycle")]),e._v(" "),s("li",[e._v("S3 bucket policy\nIf we need to modify which user can access the bucket, we need to set the Bucket policy which is in the "),s("strong",[e._v("Permissions")]),e._v(" tab.\n"),s("br"),e._v("The policy now allows the user that created for the website application to write to the bucket. Also, the Bucket and objects are not public.")])]),e._v(" "),s("h2",{attrs:{id:"dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[e._v("#")]),e._v(" Dashboard")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("dashboard")]),e._v(" is the folder to store the react project of dashboard.")])]),e._v(" "),s("h3",{attrs:{id:"run-the-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-dashboard"}},[e._v("#")]),e._v(" Run the Dashboard")]),e._v(" "),s("ol",[s("li",[e._v("To run the project on localhost, first access the "),s("code",[e._v("dashboard")]),e._v(" directory from root.")])]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ cd dashboard\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Install all the required "),s("code",[e._v("node_modules")]),e._v(" packages by executing one of the following commands in the terminal:")])]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm install\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ yarn install\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Add a "),s("code",[e._v(".env")]),e._v(" file under "),s("code",[e._v("dashboard")]),e._v(" directory to store the following environmnet variables:")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("REACT_APP_CIRCLECI_TOKEN")])]),e._v(" "),s("li",[s("strong",[e._v("REACT_APP_AWS_ACCESS_KEY_ID")])]),e._v(" "),s("li",[s("strong",[e._v("REACT_APP_ACCESS_KEY")])]),e._v(" "),s("li",[s("strong",[e._v("REACT_APP_REGION")]),e._v(" "),s("code",[e._v("REACT_APP_CIRCLECI_TOKEN")]),e._v(" is your personal CircleCI API token. You can generate one in 'Personal API Tokens' section under your CircleCI user settings page.\n"),s("code",[e._v("REACT_APP_AWS_ACCESS_KEY_ID")]),e._v(", "),s("code",[e._v("REACT_APP_ACCESS_KEY")]),e._v(", "),s("code",[e._v("REACT_APP_REGION")]),e._v(" are related to Action IT's AWS account.")])]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Run the project by one of the following commands:")])]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm start\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ yarn start\n")])])]),s("h3",{attrs:{id:"dashboard-user-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard-user-interface"}},[e._v("#")]),e._v(" Dashboard User Interface")]),e._v(" "),s("p",[e._v("Currently, there are three main functions on the dashboard:")]),e._v(" "),s("ul",[s("li",[e._v("Synchronize data from production server to staging server.")]),e._v(" "),s("li",[e._v("Start a new deployment and update the status in the deployment history section.")]),e._v(" "),s("li",[e._v("List the latest 3 backup files of the staging server in AWS S3. When the latest deployment failed, user could choose one of the backups to restore.\n(ps: it will create two environment variables on CircleCI, still needs further implementation on script level.)")]),e._v(" "),s("li",[e._v("Show the deploymnet history.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);