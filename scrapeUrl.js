const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function scrapeUrl(url = "https://www.metacritic.com/movie/shutter-island/critic-reviews") {
  try {
    console.log("scraping url: ", url); 
    const response = await fetch(url);
    const htmlString = await response.text();
    const dom = new JSDOM(htmlString);
    const body = dom.window.document.body;
    return body.innerHTML;
  } catch (error) {
      console.log("scrapeUrl error when using got error:", error);
  }
}


module.exports = {
  scrapeUrl
}