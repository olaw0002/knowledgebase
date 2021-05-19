# Accessibility testing tool containerised
This tool includes a modified and containerised Pa11y accessibility tool for web content accessibility testing originally created by frvge.
## Original reference
Pa11y: [Pa11y](https://github.com/pa11y/pa11y) \
frvge: [frvge](https://github.com/frvge) \
Original repo: [repo](https://github.com/frvge/pa11y-docker)

## Language and technology used
Node.js (version 8 +)\
Puppeteer (version 19+)\
Chromium (latest)

## Working directory
//accessibility_testing

## Usage
Put the two file ***Dockerfile*** and ***pa11y-config.json*** in same directory
Open a console then change directory to where the two file is located at then type \
`docker build -t pa11y .` \
This command reads the Dockerfile and build the image based on that. \
When the image is ready, it can be used with the basic usage\
`docker run --rm pa11y  https://solferinoacademy.com/` \
This will generate a cli readable report on the console.\
To change the standard, type ***--standard [standard]*** before the url like\
`docker run --rm pa11y --standard WCAG2A https://solferinoacademy.com/` \
To change the report type, enter ***--report [reporter]*** before the url like\
`docker run --rm pa11y --reporter json https://solferinoacademy.com/` \
or\
`docker run --rm pa11y --reporter html https://solferinoacademy.com/` \
To save the result to a file, type ***> filename.extension*** after the url like\
`docker run --rm pa11y --reporter json https://solferinoacademy.com/ > result.json`\
`docker run --rm pa11y --reporter html https://solferinoacademy.com/ > index.html` \
`docker run --rm pa11y --reporter cli https://solferinoacademy.com/ > report.md` 

## Sample reports
A number of sample reports has already been generated into the following formats:
html
markdown
json
files can be found under accessibility_testing/sample_reports