const puppeteer = require('puppeteer');

async function scrapeUrl(url = "https://www.metacritic.com/movie/shutter-island/critic-reviews") {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log("scraping url:", url);
  await page.goto(url, { waitUntil: 'networkidle0' });

  let html = await page.evaluate(() => {
    return document.documentElement.innerHTML;
  });

  await browser.close();
  return html;
}

module.exports = {
  scrapeUrl
}