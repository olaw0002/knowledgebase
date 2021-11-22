# Accessibility Testing

Created by [Anmol Sarraf](https://github.com/AnonSar)

The following documentation explains the approach used to conduct the accessibility assessment using Pa11y and how to integrate it with the pipeline dashboard.

## Considerations

When doing accessibility assessment on Solferino's academy Website, we need to take following things into consideration:

1. The user conducting the assessment would like to view the non-technical assessibility issues that could be understood by a non-technical person and they should be able to locate those issues on the target webpage.
2. The accessibility standard used to conduct the accessibility assessment is [WCAG 2.0 AA Standard](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=a%2Caaa#top).
3. The user should be able to compare the results of the current report with the most recent report.

## Technical Solution - Pa11y

2021S1 Accessibility team suggested using [Pa11y](https://github.com/pa11y) as a solution to perform assessibility assessment. After a thorough analysis of different tools available online for conducting accessibility assessment, we decided to go ahead with Pa11y since it met all the requirements of the projects.

Pa11y, pronounced pally, is a set of free and open source tools that aims to make designing and developing accessibility easier. It runs accessibility test on the specified pages via the command line or Node.js, so the user can automate their testing process.

Following are some references used for writing the node scripts to run Pa11y:

1. [Getting Started](https://github.com/pa11y/pa11y#javascript-interface) with Pa11y javascript interface.
2. Understanding [WCAG Standards](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=a%2Caaa#top).

## Technical Solution - Integration with the Dashboard

Pipeline team created a react web applications [dashboard](https://github.com/actionitdev/pipeline/tree/dashboard) to allow users to run everything in one place. Pa11y has been integrated with it to allow users to run accessibility assessment on any given web page with a button click.

Following are some references used for integration:

1. Create [react component](https://www.w3schools.com/react/react_components.asp) for the accessibility page.
2. [Make post call to node server](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples) and [handling the api call in node server](https://expressjs.com/en/guide/routing.html).
3. Send html report to the frontend by making the public folder available to the client and put the report in this folder [Refer to this document](https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b).

## Roadmap

It's assumed that further functionalities will still be integrated with the dashboard. Following are some suggestions for enhancing the accessibility assessment feature:

1. Currently, the accessibility assessment is being conducted as per WCAG 2.0 AA standard. We can provide some flexibility to the user conducting the assessment, by allowing them to select the WCAG standard that they would like to use for conducting the accessibility assessment.
2. At the moment user can compare the current report with the most recent report only. This could be further improved by storing the preivous reports for past few weeks/months and allowing user to select the previous report against which they would like to compare the current report.
3. Currently, the comparison report is being displayed in HTML format. The results of this report could be further visualized in a user friendly manner which will help the user in getting more useful insights. [Visualization JavaScript library](https://d3js.org/)
4. At the moment, if an error occurs then a generic error page is displayed to the user. This could be further improved by showing some more details about the error to the user so that the user can fix the error accordingly.

