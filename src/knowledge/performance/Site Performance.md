# Perfomance testing plan for Solferino WordPress site
Created by [Prithvi](https://github.com/prmunday)

Folllowing documentation explains the recommended strategy to measure the performance of Solferino academy website which can be configured as one stage in the deployement pipeline. It also covers the performance measurement based on the type of device (PC, phone, etc) used and the location (countries) of the user.

## KPIs to measure performance
Following are the Key Perfomance Indicators (KPI) suggested to measure the performance of general wordpress deployed websites.

1. <b>Time to interactive</b>
2. <b>First Visible content</b>
3. <b>Loading time</b>

## Proposed technical solution
It is assumed that CircleCI will be used for the management of the deployement pipeline. Hence, the recommended softwares/solutions are highly compatible with CircleCI and docker environment.

[Tauras](https://gettaurus.org/) is the recommended solution to write the scripts to measure the performance. [Apache Jmeter](https://jmeter.apache.org/) is one of the most common open source soluction to load test functional behavior and measure performance. Although it’s quite powerful, it’s not very easy to use and its reporting abilities are very limited. Taurus is a free and open source framework for Continuous Testing which helps by hiding the complexities of running performance tests.

Following are some references for to write the Tauras scripts which can be used to measure above-mentioned KPIs for different devices and for different locations.

1. [Getting started](https://gettaurus.org/kb/Basic1/) with Tauras guide.
2. [Tauras-Jmeter](https://gettaurus.org/docs/JMeter/) covering all the concepts and configuraton required to write scenarios (KPI) in tauras. Refer this [page](https://www.blazemeter.com/blog/mobile-performance-testing-with-BlazeMeter-and-Apptim) to refer on how to set the device to simulate the performance (using Blazemeter module).
3. [CircleCI](https://www.blazemeter.com/blog/how-to-integrate-jmeter-into-circleci) intergration guideline.
4. [Reporting](https://gettaurus.org/docs/Reporting/) for the interpretation of the results.
5. Running tauras through [docker](https://www.blazemeter.com/blog/how-execute-load-test-using-taurus-docker-image) scripts.