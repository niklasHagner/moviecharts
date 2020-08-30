const express = require('express');
const app = express();
const port = 3000;
const { scrapeUrl } = require('./scrape.js');
const cors = require('cors');

app.use(express.static('public'))


app.get('/test-get-response', async function (req, res) {
    res.json({canGetSomeResponse:true});
});

app.get('/scrape', cors(), async function (req, res) {
    console.log("req", req.query.url);
    const html = await scrapeUrl(req.query.url);
    res.send(html);
});

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
});