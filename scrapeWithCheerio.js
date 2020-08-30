const cheerio = require('cheerio');
const got = require('got');

async function scrapeUrl(url = "https://www.metacritic.com/movie/shutter-island/critic-reviews") {
  try {
    console.log("scraping url: ", url); 
    const response = await got(url);
    const $ = cheerio.load(response.body);
    return $.html();
  } catch (error) {
      console.log("scrapeUrl error when using got error:", error);
  }
}


module.exports = {
  scrapeUrl
}