const express = require('express')
const app = express()
const port = 3000;
const { scrapeUrl } = require('./scrape.js');
const cors = require('cors')

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
// //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

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