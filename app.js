const express = require('express');
const app = express();
const port = 3000;
const { scrapeUrl } = require('./scrape.js');
const cors = require('cors')

app.get('/test', async function (req, res) {
    res.json({pizza:true});
});

app.get('/', cors(), async function (req, res) {
    console.log("req", req.query.url);
    const html = await scrapeUrl(req.query.url);
    res.send(html);
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
})