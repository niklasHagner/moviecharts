const puppeteer = require('puppeteer');
const fs = require('fs');
const moment = require("moment");

async function scrapeUrl(url = "https://www.metacritic.com/movie/shutter-island/critic-reviews") {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log("scraping url:", url);
  await page.goto(url, { waitUntil: 'networkidle0' });

  let html = await page.evaluate(() => {
    // const divisionElements = [...document.querySelectorAll(".weight-rankings")];
    // const divisions = divisionElements.map((division) => { 
    //   return { 
    //     name: division.querySelector("h3").innerText, 
    //     fighters:  [...division.querySelectorAll(".fighter")].map((fighter) => {
    //       return {
    //         rank: fighter.querySelector(".rank").innerText,
    //         link: "https://mma-stats.com" + fighter.querySelector("a").getAttribute("href"),
    //         name: fighter.querySelector("a").innerText
    //       };
    //     })
    //   }
    // });

    // const selectedDate = document.querySelector("#date_select").selectedOptions[0].innerText;

    // const json = {
    //   date: selectedDate,
    //   divisions
    // }
    // return json;

    return document.documentElement.innerHTML;
  });

  await browser.close();
  return html;
}

module.exports = {
  scrapeUrl
}