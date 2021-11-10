# Performance Testing

Created by [Yunkai](https://github.com/FXGen)

The following documentation explains the approach to conduct the performance test using Google Lighthouse and how to integrate it with the pipeline dashboard.

## Considerations

When doing a performance test on Solferino's website, we need to take the user's usage condition into consideration.

1. <b>Network condition: Potential users of Solferino's website are likely to suffer from the low bandwidth</b>
2. <b>Device issues: Potential users of Solferino's website might use different ways to access the network</b>

## Technical Solution - Google Lighthouse

2021S1 performance team suggested using [Tauras](https://gettaurus.org/) as a solution to measure the performance. However, it concentrates on the server side performance while the client is more concerned with the client/browser side performance. As a result, Google Lighthouse is selected as the tool to use. [Why Taurus/Jmeter is not suitable for client side performance](https://stackoverflow.com/questions/65351656/how-to-test-client-side-performance-testing-of-single-page-application-with-jmet)

Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more. In the project, it is only used to evaluate performance. 

Following are some references used for writing the node scripts to run lighthouse.

1. [Getting started](https://developers.google.com/web/tools/lighthouse) with Lighthouse overview.
2. Lighthouse can be run programmatically [as a node module](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically).
3. [Network throttling](https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md) for simulating low bandwidth network conditions.
4. [Reporting](https://web.dev/lighthouse-performance/) for understanding the generated report.
5. [LHR](https://github.com/GoogleChrome/lighthouse/blob/master/docs/understanding-results.md) contains all the audit information determined about the target web page. You can make use of it to do further analysis.

## Technical Solution - Integration with the dashboard

Pipeline team created a react web application [dashboard](https://github.com/actionitdev/pipeline/tree/dashboard) to allow users to run everything in one place. Google Lighthouse is integrated with it to enable users to run performance tests on any given page with a button click.

Following are some references used for integration.

1. Create [component](https://www.w3schools.com/react/react_components.asp) for the performance page.
2. [Make post call to node server](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples) and [handling the api call in node server](https://expressjs.com/en/guide/routing.html).
3. Send html report to the frontend by making the public folder available to the client and put the report in this folder[Refer to this document](https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b).

## Roadmap

It's assumed that further functionalities will still be integrated with the dashboard. Following are some suggestions for enhancing the performance test.

1. [Lighthouse configuration](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md) could be used to customize Lighthouse to suit your use case. For example, onlyCategories could be added to the config file to include only the specified categories in the final report to reduce the time taken by the test. 
2. If there are any previous tests on the same url, a comparison with the most recent report will be automatically conducted. The comparison report shows how metrics change in percentage. This is an existing function but comparing any two reports has not been implemented in the dashboard. The code for doing it is already in the script. You need to let users run it from the frontend and allow users to select two existing reports.
3. The comparison report is in plain text now. Visualize the data to present to the user more friendly.[Visualization JavaScript library](https://d3js.org/)
4. [Integrate Google Lighthouse into CI/CD pipeline](https://xebia.com/blog/integrate-google-lighthouse-into-your-cicd-pipeline/)
5. Some settings need to be configured in the script. Provide UI in dashboard for non-technical users to change them easily.






