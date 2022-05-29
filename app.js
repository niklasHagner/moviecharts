const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { scrapeUrl } = require('./scrapeWithCheerio.js');
const { getMovieDetails } = require('./getMovieDetails.js');
const cors = require('cors');
const got = require('got');

app.use(express.static('public'))


app.get('/test-get-response', async function (req, res) {
    res.json({ canGetSomeResponse: true });
});

app.get('/scrape', cors(), async function (req, res) {
    console.log("Scraping:", req.query.url);
    const html = await scrapeUrl(req.query.url);
    res.send(html);
});

app.get('/getMovieDetails', cors(), async function (req, res) {
    const url = req.query.url;
    console.log("Scraping:", url);
    const response = await got(url);
    const responseHtml = response.body;
    const details = await getMovieDetails(responseHtml);
    res.json(details);
});

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
});