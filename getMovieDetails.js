const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function getMovieDetails(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const name = getMovieNameFromDoc(document);
  const img = getImgSrcFromDoc(document);
  const description = getDescriptionFromDoc(document);

  const json = {
    name,
    img,
    description
  }
  return json;
}

/*
Metacritic has two html structures
* old https://www.metacritic.com/movie/the-janes
* new https://www.metacritic.com/movie/top-gun-maverick
*/

function getMovieNameFromDoc(document) {
  const jsonLD = document.querySelector("script[type='application/ld+json']");
  if (jsonLD) {
    return JSON.parse(jsonLD.innerHTML).mainEntity.name;
  }

  let titleEl = document.querySelector(".product_page_title h1");
  if (!titleEl) {
      titleEl = document.querySelector(".c-entertainmentProductInfoCard_info h1");
  }
  return titleEl.textContent.trim();
};

function getImgSrcFromDoc(document) {
  const jsonLD = document.querySelector("script[type='application/ld+json']");
  if (jsonLD) {
    return JSON.parse(jsonLD.innerHTML).mainEntity.image;
  }

  var elem = document.querySelector(".summary_img");
  if (!elem) {
      elem = document.querySelector(".c-entertainmentProductInfoCard_card .c-cmsImage img");
      if (!elem) {
          console.error("Damnit. MetaCritic changed their img markup and broke this web scraper");
          return "";
      }
  }
  return elem["src"];
};

function getDescriptionFromDoc(document) {
  const jsonLD = document.querySelector("script[type='application/ld+json']");
  if (jsonLD) {
    return JSON.parse(jsonLD.innerHTML).mainEntity.description;
  }

  let elem = document.querySelector(".blurb_expanded");
  if (!elem) {
      elem = document.querySelector(".summary_deck.details_section");
  }
  if (!elem) {
      elem = document.querySelector(".c-entertainmentProductDetails_description");
      if (!elem) {
          console.error("Damnit. MetaCritic changed their description markup and broke this web scraper");
          return "";
      }
  }
  return elem.textContent;
};

function parseScoresFromMetaCriticHTML(document) {
  var tagsWithScores = document.querySelector(".review .metascore_w");
  if (tagsWithScores.length == 0) {
      console.error("Damnit. MetaCritic changed their markup for `review .metascore_w`");
      return [];
  }
  const scoreArray = tagsWithScores.map(function (index, elem) {
      return Number(elem.innerHTML);
  });
  return scoreArray;
};

module.exports = {
  getMovieDetails
}