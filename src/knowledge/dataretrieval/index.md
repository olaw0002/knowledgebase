# Table of Contents

[Project Brief](#project-brief)

[Initial Migration process](#Initial-Migration-process)

[Current investigation process](#Current-investigation-process)

[Import/Export of content](#Import/Export-of-content)

[Catalogue of site content](#Catalogue-of-site-content)

# Project Brief

The current Solferino Academy WordPress website has been through a number of iterations. Recently their team rebuilt the template, and in the process are unable to recover many of the pages that existed prior to this major change. This data exists as a backup of the old server and needs to be extracted, cataloged, and manipulated into a format ready for selective import into the new site.

# Initial Migration Process

As per the client, the following procedure was followed while initially migrating the content from the old site to the new site.

- Used Duplicator plugin for doing backups. It is a plugin that duplicates all AP files and folders along with the database.
- Used XML import/export for restoring the content to the new site. Also used Divi for copy/paste the content, however faced some issues during the migration.
- Potential reasons for restoration failure: Theme/plugin compatibility issues, Timeout during restoration.
- There have been many structural changes since the initial site. E.g., previously Strategy 2030 content was scattered around the site in multiple posts/pages. But now it is grouped into one section.

# Current Investigation Process

- Action IT set up a dev site based on the most recent backup of the current Solferino Academy site.

Link to dev site: [https://solferinoacademy.actionit.dev/wp-admin](https://solferinoacademy.actionit.dev/wp-admin)

- Old site archive was shared by the client in the form of a zip backup extracted using the Duplicator plugin.
- Installed WordPress site on local and set up the database.
- Downloaded the old site archive provided by the client and extracted the contents of the zip into the folder created in htdocs for the local site. Copied the archive.zip as it is without changing the name.
- Copied installer-backup.php (from extracted archive zip) to drfolder and renamed it to installer.php. Ran the installer.php file from the browser.
- Completed the steps of the installation process by setting the previously setup DB as the database and by creating an admin account for the site.

# Import/Export of Content

Installed &quot;single post exporter&quot; plugin on the localhost. The plugin allows to import/export of the posts/pages one by one.

![Single Post Exporter](/dataretrieval/img1.png)

![Single Post Exporter](/dataretrieval/img9.png)

![Single Post Exporter](/dataretrieval/img2.png)

Exported a single post, which gets exported as an xml file.

Imported the same in dev site. No issues found.

![Import Post](/dataretrieval/img3.png)

Exported a page from the local site using the same plugin.

![Export Page](/dataretrieval/img4.png)

In dev site, imported the page.

![Import Page](/dataretrieval/img5.png)

![Import Page](/dataretrieval/img6.png)

Verified translation on dev site.

![Translation Verification](/dataretrieval/img7.png)

# Catalogue of Site Content

We have created a catalog of site content (posts and pages) that can be viewed by their names and then selectively imported onto the target site.

Example:

![Catalogue](/dataretrieval/img8.png)
