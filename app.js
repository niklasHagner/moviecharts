const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { scrapeUrl } = require('./scrapeUrl.js');
const { getMovieDetails } = require('./getMovieDetails.js');
const cors = require('cors');

app.use(express.static('public'))

app.get('/test-get-response', async function (req, res) {
    res.json({ canGetSomeResponse: true });
});

app.get('/scrape', cors(), async function (req, res) {
    const html = await scrapeUrl(req.query.url);
    res.send(html);
});

app.get('/getMovieDetails', cors(), async function (req, res) {
    const url = req.query.url;
    console.log("Scraping:", url);
    const response = await fetch(url);
    const htmlString = await response.text();
    const details = await getMovieDetails(htmlString);
    res.json(details);
});

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
});