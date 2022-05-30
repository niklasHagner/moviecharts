# moviecharts

Scrapes metacritic movie reviews and presents the scores as a bar-chart.

## Intro

This was built in 2016 as a frontend application which just called an online service to scrape html from metacritic.com and parsed it clientside.

As that online service was shut down, I had to write a backend to handle the scraping.

## Basic idea

1. `public/index.html` is loaded and runs the the  `public/main.js` which sets up knockout and triggers all data fetches
2. Initially an overview of popular movies is rendered
3. Secondly, we fetch more details about the first film, and use the review-scores to render a bar chart using chartJs.org

Note: technically you could just navigate to `public/index.html` directly .

But the node app's root endpoint will also serve that page.

## Run the application

1. `node app.js` to start the node-server which will be used as our API
2. Navigate to `localhost:3000` - and it'll serve `public/index.html` which in turn will call the API


## Details

Uses two default movies as backup data
* Inception 
* Automata


## Tech

remember this was built in 2016

* knockoutJs for data-binding
* chartJs.org for bar-charts
* jQuery for fetching and queryselectors
