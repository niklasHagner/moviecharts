
var getUrlHash = function () {
    var result = location.hash;
    result = result.replace("#", "");
    return result === null ? null : decodeURIComponent(result.replace(/\+/g, " ")).replace("#", "");
};

var setUrlHash = function (value) {
    window.location.hash = encodeURIComponent(value.replace(/\+/g, " "));
};

var getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var getCrossDomainData = function (requestUrl) {
    var url = window.location.origin + "/scrape?url=" + encodeURIComponent(requestUrl);
        
    var deferred = $.Deferred();
    $.get(url,
        function (data,status) {
        if (status === "success") {
            deferred.resolve(data);
        } else { //error
            deferred.reject(`failed to get url: ${url}`);
        }
    });
    return deferred.promise();
};

var getReviewsAsync = async function (requestUrl) {
    var url = window.location.origin + "/scrape?url=" + encodeURIComponent(requestUrl);
    const response = await fetch(url);
    const html = await response.text();

    var nodes = jQuery.parseHTML(html, true);
    let relevantScriptInnerHTML;
    jQuery.each( nodes, function( i, el ) {
      if (el.nodeName === "SCRIPT") {
        if (el.innerHTML.indexOf('window.__NUXT__') > -1) {
          relevantScriptInnerHTML = el.innerHTML;
          return false;
        }
      }
    });
    
    // All data is baked into a function that is run when injecting this script running script 
    // It will create `window.__NUXT__` which contains all the data we need
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = relevantScriptInnerHTML;

    $('body').append(script);

    const reviews = window.__NUXT__.data[0].content.components[2].items;
    const reviewArray = reviews.map((review) => { 
        return {
            text: review.quote + " /" + review.publicationName,
            score: review.score
        };
    });

    return reviewArray;
};

var getMovieDetails = async function (requestUrl) {
    const url = window.location.origin + "/getMovieDetails?url=" + encodeURIComponent(requestUrl);
    const data = await fetch(url);
    return data;
};

function filterData(data) {
    // filter all the nasties out
    // no body tags
    data = data.replace(/<?\/body[^>]*>/g, '');
    // no linebreaks
    data = data.replace(/[\r|\n]+/g, '');
    // no comments
    data = data.replace(/<--[\S\s]*?-->/g, '');
    // no noscript blocks
    data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g, '');
    // no script blocks
    data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g, '');
    // no self closing scripts
    data = data.replace(/<script.*\/>/, '');
    // [... add as needed ...]
    return data;
}
