# Table of Contents

[Project Brief](#project-brief)

[Initial Migration process](#Initial-Migration-process)

[Current investigation process](#Current-investigation-process)

[Import/Export of content](#Import/Export-of-content)

[Catalogue of site content](#Catalogue-of-site-content)

# Project Brief

The current Solferino Academy WordPress website has been through a number of iterations. Recently their team rebuilt the template, and in the process are unable to recover many of the pages that existed prior to this major change. This data exists as a backup of the old server, and needs to be extracted, catalogued and manipulated into a format ready for selective import into the new site.

# Initial Migration process

As per client, the following procedure was followed while initially migrating the content from old site to new site.

- Used Duplicator plugin for doing backups. It is a plugin that duplicates all AP files and folders along with the database.
- Used XML import/export for restoring the content to new site. Also used DiVi for copy/paste the content, however faced some issues during the migration.
- Potential reasons for restoration failure: Theme/plugin compatibility issues, Timeout during restoration.
- There have been many structural changes since the initial site. For e.g., previously Strategy 2030 content was scattered around the site in multiple posts/pages. But now it is grouped into one section.

# Current investigation process

- Action IT set up a dev site based on the most recent backup of the current Solferino Academy site.

Link to dev site: [https://solferinoacademy.actionit.dev/wp-admin](https://solferinoacademy.actionit.dev/wp-admin)

- Old site archive was shared by the client in the form of a zip backup extracted using Duplicator plugin.

Link to the Zip Backup:

[http://www.yannleflo.ch/dev/downloads/Solferino-Academy/BCKP/00/20191031\_thefutureredcrossandredcr\_6e7b8a0ece4c4b8d2437\_20191031203851\_archive.zip](http://www.yannleflo.ch/dev/downloads/Solferino-Academy/BCKP/00/20191031_thefutureredcrossandredcr_6e7b8a0ece4c4b8d2437_20191031203851_archive.zip)

- Installed WordPress site on local and set up the database.
- Downloaded the old site archive provided by client and extracted the contents of the zip into the folder created in htdocs for local site. Copied the archive.zip as it is without changing name.
- Copied installer-backup.php (from extracted archive zip) to drfolder and renamed it to installer.php. Ran the installer.php file from the browser.
- Completed the steps of the installation process by setting the previously setup DB as the database and by creating an admin account for the site.

# Import/Export of content

Installed &quot;single post exporter&quot; plugin on the localhost. The plugin allows to import/export the posts/pages one by one.

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img1.png)

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img9.png)

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img2.png)

Exported a single post, which gets exported as an xml file.

Imported the same in dev site. No issues found.

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img3.png)

Exported a page from the local site using the same plugin.

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img4.png)

In dev site, imported the page.

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img5.png)

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img6.png)

Verified translation on dev site.

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img7.png)

# Catalogue of site content

We have created a catalogue of site content (posts and pages) which can be viewed by their names and then selectively imported on to the target site.

Example:

![](https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img8.png)
