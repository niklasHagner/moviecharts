const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function getMovieDetails(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const jsonMetadataElement = document.querySelector("script[type='application/ld+json']");
  let jsonLD;
  if (jsonMetadataElement) {
    jsonLD = JSON.parse(jsonMetadataElement.innerHTML);
    if (jsonLD.mainEntity) {
      jsonLD = jsonLD.mainEntity;
    }
  }
  const name = getMovieNameFromDoc(document, jsonLD);
  const img = getImgSrcFromDoc(document, jsonLD);
  const description = getDescriptionFromDoc(document, jsonLD);

  const film = {
    name,
    img,
    description
  }
  return film;
}

/*
Note: Metacritic has two different html structures
* old https://www.metacritic.com/movie/the-janes - the image exists in the initial html
* new https://www.metacritic.com/movie/top-gun-maverick - the image does not exist in the initial html, use jsonLD -> mainEntity
* https://www.metacritic.com/movie/dirty-harry - jsonLD doesn't have mainEntity
*/

function getMovieNameFromDoc(document, jsonLD) {
  if (jsonLD) {
    return jsonLD.name;
  }

  let titleEl = document.querySelector(".product_page_title h1");
  if (!titleEl) {
      titleEl = document.querySelector(".c-entertainmentProductInfoCard_info h1");
  }
  return titleEl.textContent.trim();
};

function getImgSrcFromDoc(document, jsonLD) {
  if (jsonLD) {
    return jsonLD.image;
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

function getDescriptionFromDoc(document, jsonLD) {
  if (jsonLD) {
    return jsonLD.description;
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