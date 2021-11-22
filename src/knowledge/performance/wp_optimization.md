# Optimising WordPress Installations

_Created by [Subbu](https://github.com/gsubbu)_

Below are some of the steps taken to improve the performance of WordPress websites:

## Performance Testing Tools: (Measuring Performance)

1. https://gtmetrix.com/
2. https://tools.pingdom.com/

Location-based testing is limited in the free version of Pingdom, but with PRO versions testing can be done from any given location.

## Steps to Improve Server-side Caching

Following the below steps will improve your site's initial server response time:

1. Page Caching - WP Rocket
2. Database Caching - WP Rocket
3. Object Caching - WP_Object_Cache (By default internal - single load only), Redis Object Cache (External plugin - Multiple loads)
4. Opcode Caching - WP OPcache
5. Reverse proxy cache - WP Rocket & Varnish
6. CDN Caching

Install varnish & Redis objects in the server and configure the plugins in WordPress.

## Improve Client-side Caching:

1. Browser caching - WP Rocket

## Eliminate Render-blocking Resources

Following the below steps will reduce your site's page size and loading time:

1. Progressive loading of the webpage - WP Rocket
2. Image optimization - Imagify/EWWW Image Optimizer

Only the paid licensed versions of Imagify can fully optimize all images of a large website. If a paid account isn't possible, we recommended manually compress large images, prioritising the ones which are largest and most frequently encountered (e.g. are used in site templates)
