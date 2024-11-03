# moviecharts

Scrapes metacritic movie reviews and presents the scores as a bar-chart.



## Run the application

1. `node app.js` to start the node-server which will be used as our API
2. Navigate to `localhost:3000` - and it'll serve `public/index.html` 

## Tech

* chartJs.org for bar-charts
* React from https://unpkg.com/react-dom@18/umd/react-dom.development.js


### Details

1. `public/index.html` is loaded and runs the the  `public/main.js` which sets up knockout and triggers all data fetches
2. Initially an overview of popular movies is rendered
3. Secondly, we fetch more details about the first film, and use the review-scores to render a bar chart using chartJs.org

Note: technically you could just navigate to `public/index.html` directly .

But the node app's root endpoint will also serve that page.



## History

Built in 2016 using Jquery and Knockout plus an online service for fetching data from metacritic.com
Replaced with custom scraper and React