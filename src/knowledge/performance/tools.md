# Accessibility testing tools

_Created by [Nelly](https://github.com/RingoHanabi)_

You can easily assess how well your website meets international accessibility standards through running [Pa11y](https://github.com/pa11y/pa11y).
For convenience, [frvge](https://github.com/frvge) containerised Pa11y so that it can be run during deployment pipelines.

## Original reference

Pa11y: [Pa11y](https://github.com/pa11y/pa11y) \
frvge: [frvge](https://github.com/frvge) \
Original repo: [repo](https://github.com/frvge/pa11y-docker)

## Language and technology used

Node.js (version 8 +)\
Puppeteer (version 19+)\
Chromium (latest)
Docker

## Usage

1. Put the [Dockerfile](/files/accessibility_testing/Dockerfile) and [Pa11y config file](/files/accessibility_testing/pa11y-config.json) in same directory.
2. Open a console then change the directory to where the two files are located at then type \
   `docker build -t pa11y .`
3. This command reads the Dockerfile and builds the image based on that.
4. When the image is ready, it can be used with the basic usage\
   `docker run --rm pa11y https://solferinoacademy.com/`
5. This will generate a CLI readable report on the console.
6. To change the standard, type **_--standard [standard]_** before the URL like
   `docker run --rm pa11y --standard WCAG2A https://solferinoacademy.com/` \
7. To change the report type, enter **_--report [reporter]_** before the URL like
   `docker run --rm pa11y --reporter json https://solferinoacademy.com/`
   or\
   `docker run --rm pa11y --reporter html https://solferinoacademy.com/`
8. To save the result to a file, type **_> filename.extension_** after the url like
   `docker run --rm pa11y --reporter json https://solferinoacademy.com/ > result.json`\
   `docker run --rm pa11y --reporter html https://solferinoacademy.com/ > index.html` \
   `docker run --rm pa11y --reporter cli https://solferinoacademy.com/ > report.md`

## Sample reports

A number of sample reports has already been generated in the following formats:

- [HTML](/files/accessibility_testing/sample_report/index.html)
- [Markdown](/files/accessibility_testing/sample_report/report.md.txt)
- [Json](/files/accessibility_testing/sample_report/result.json)
