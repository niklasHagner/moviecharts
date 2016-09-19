
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
    var deferred = $.Deferred();

    var url = "http://query.yahooapis.com/v1/public/yql?" +
        "q=select%20*%20from%20html%20where%20url%3D%22" +
        encodeURIComponent(requestUrl) +
        "%22&format=xml'&callback=?";

    $.getJSON(url,
        function (data) {
            if (data.results[0]) {
                var filteredData = filterData(data.results[0]);
                deferred.resolve(filteredData);
            } else { //error
                deferred.reject("failed to get url");
            }
        });

    return deferred.promise();
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
