$(document).ready(function () {
    firstTimeLoading = true;
    var param_MovieName = getUrlHash();
    if (param_MovieName !== null || param_MovieName !== "") {
        searchByUrlParam = true;
    }
    var movieName = param_MovieName;
    var movieUrl = movieName;

    bindView();

    populateFirstPageAsyc().then(function (popularMovies) {
        if (movieName == null || movieName == "") {
            movieName = popularMovies[0].Title;
            movieUrl = popularMovies[0].Url;
            setMovieName(movieName);
        }
        fetchDataForOneFilmAndDisplayItsReviews(movieUrl, searchByUrlParam);
    });
});

var fetchDataForOneFilmAndDisplayItsReviews = function (movieUrl, searchByUrlParam) {
    getCriticsHTMLAsync(movieUrl).then(function (criticsHTML) {
        if (searchByUrlParam) {
            setUrlHash(movieUrl);
        }
        populateMovieScoreByCriticsHTML(criticsHTML);
        var reviews = getReviews(criticsHTML);
        reviews = (reviews.length > 2) ? [reviews[0]].concat(reviews[reviews.length - 1]) : reviews;
        viewModel.Reviews(reviews);
    });
};

var firstTimeLoading = false;
var searchByUrlParam = false;

var searchClick = function (movie) {
    searchByUrlParam = false;
    viewModel.SearchError("");
    var title = "";
    var urlEncodedTitle = "";
    if (movie !== null && typeof movie !== "undefined" && typeof movie["Url"] !== "undefined") { //search by movie param
        title = movie.Title;
        setUrlHash(movie.Url);
        setMovieName(title);
        urlEncodedTitle = movie.Url;
    }
    else { //search by value in textbox
        title = $("#searchBox").val();
        urlEncodedTitle = title.replace(/[,;: ]+/g, "-").toLowerCase();
    }
    fetchDataForOneFilmAndDisplayItsReviews(urlEncodedTitle, true);
};

var urlBase = "http://www.metacritic.com/movie/"
var urlEnd = ""; //"/critic-reviews";
var movieUrl = urlBase + "automata";
var viewModel = {
    Movie: {
        Name: ko.observable(""),
        Description: ko.observable(""),
        Url: ko.observable(movieUrl),
        ImgSrc: ko.observable("")
    },
    Reviews: ko.observableArray([]),
    Scores: ko.observableArray([]),
    ScoresAndCounts: ko.observableArray([]),
    SearchError: ko.observable(""),
    SearchClick: searchClick,
    PopularMovies: ko.observableArray([]),
    MovieListColumnClass: movieListColumnClass
};

var movieListColumnClass = function () {
    var bootstrapWidth = Math.floor(viewModel.PopularMovies().length / 12);
    var bootstrapOffset = 0;
    return "col-md-" + bootstrapWidth + "col-md-offset-" + bootstrapOffset;
};

var getReviews = function (html) {
    var reviewArray = [];
    var reviews = jQuery(html).find(".review");
    //note: this is a jquery object, not a JS array

    if (reviews.length == 0) {
        return [];
    }

    reviews.each(function (index, elem) {
        var e = jQuery(elem).find(".summary a");
        if (e && e.html && e.html()) {
            reviewArray.push({
                text: e.html().trim(),
                grade: jQuery(elem).find(".metascore_w").html()
            });
        }
    });

    return reviewArray;
};

var populateMovieScoreByCriticsHTML = function (html) {
    //options
    var NORMALIZE_SCORES = true;
    var PERCENTAGE_SCORES = true;
    //vars
    var allScores = parseScoresFromMetaCriticHTML(html).reverse();
    var scoresAndCounts = getScoresAndCountsFromScores(allScores);
    viewModel.Scores(allScores);
    viewModel.ScoresAndCounts(scoresAndCounts);

    var yValues = [], xValues = [];
    if (NORMALIZE_SCORES) {
        var counts = [];
        var zeroToNintety = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
        counts = Array.apply(null, Array(11)).map(Number.prototype.valueOf, 0);
        allScores.forEach(function (score) {
            var roundedScore = Math.floor(score / 10) * 10;
            var newIndex = (roundedScore === 0) ? 0 : roundedScore / 10;
            counts[newIndex] += 1;
        });
        xValues = zeroToNintety;
        yValues = counts;
    }
    else {
        var uniqueCounts = [];
        var uniqueScores = [];
        var labelsAndData = scoresAndCounts.forEach(function (el) {
            uniqueScores.push(el.score);
            uniqueCounts.push(el.count);
        });
        yValues = uniqueCounts;
        xValues = uniqueScores;
    }

    if (PERCENTAGE_SCORES) {
        var totalScoreCount = allScores.length;
        var percentages = [];
        yValues.forEach(function (count) {
            var percentage = 0;
            if (count > 0) {
                percentage = Math.floor((count / totalScoreCount) * 100);
            }
            percentages.push(percentage);
        });
        yValues = percentages;
    }

    var barchartdata = getBarChartData(yValues, xValues);
    bindBarChart(barchartdata);

    //var bubbleData = getBubbleChartData(allScores);
    //bindBubbleChart();
};


var bindBarChart = function (data) {
    if (firstTimeLoading)
        window.myBar.reflow();
    else {
        if (window.myBar)
            window.myBar.destroy();
    }
    var ctx = document.getElementById("canvas").getContext("2d");
    var options = {
        responsive: true,
        animation: true,
        scaleLabel: "<%= (Number(value) + '%')   %>",
        scaleShowLabelBackdrop: true,
        scaleShowLabels: true,
        scaleBeginAtZero: true,
        tooltipTemplate: "<%= value + '% of reviews gave ' + label + '/100' %>"
    };
    window.myBar = new Chart(ctx).Bar(data, options);

    //color each bar by score 
    myBar.datasets[0].bars.map(function (bar, ix) {
        bar.fillColor = window.chartColorArray[ix]; 
        //getColorByScore(ix);
    });
    myBar.update();
};

var bindView = function () {
    if (firstTimeLoading)
        ko.applyBindings(viewModel);
    firstTimeLoading = false;
};

var FirstPageHTML = "";

var setMovieName = function (movieName, movieUrl) {
    viewModel.Movie.Name(movieName);
};

var populateFirstPageAsyc = function () {
    var deferred = jQuery.Deferred();
    getFirstPageAsync().then(function (firstPageHTML) {
        var popularMovies = getPopularMoviesFromHTML(firstPageHTML);
        popularMovies = popularMovies.sort(function (a, b) {
            var sortResult = Number(a.Score) >= Number(b.Score) ? -1 : 1; //SORTING RETURN VALUE LEGEND [0=noChange, 1=Afirst, -1=eBfirst]
            return sortResult;
        });
        popularMovies = getUniqueByValue(popularMovies, 'FulUrl');
        viewModel.PopularMovies(popularMovies);
        deferred.resolve(popularMovies);
    });
    return deferred.promise();
};

var getFirstPageAsync = function () {
    var firstPageUrl = "http://www.metacritic.com/movie";
    var deferred = jQuery.Deferred();
    getCrossDomainData(firstPageUrl).done(function (firstPageHTML) {
        FirstPageHTML = firstPageHTML; //todo
        deferred.resolve(firstPageHTML);
    })
        .fail(function () {
            viewModel.SearchError("Could not load the first page, AAARGH!");
            deferred.reject("could not get first page");
            throw Error("getCrossDomainData promise failure. CRAP!");
        });

    return deferred.promise();

    // return new Promise((resolve, reject) => {
    //      return resolve(window.getExampleHtml());
    //  });
   
};

var getCriticsHTMLAsync = function (urlEncodedTitle) {
    ///search for a movie and populate the page

    var url = movieUrl = urlBase + urlEncodedTitle + urlEnd;

    var deferred = jQuery.Deferred();
    getCrossDomainData(url).done(function (moviePageHTML) {
        setMovieName(getMovieNameFromHTML(moviePageHTML));
        viewModel.Movie.ImgSrc(getImgSrcFromHTML(moviePageHTML));
        viewModel.Movie.Description(getDescriptionFromHTML(moviePageHTML));
        getCrossDomainData(url + "/critic-reviews").done(function (criticsHTML) {
            viewModel.SearchError("");
            deferred.resolve(criticsHTML);
        })
            .fail(function () {
                viewModel.Scores([]);
                viewModel.ScoresAndCounts([]);
                viewModel.SearchError("No reviews found. Try again!");
                deferred.reject();
                throw Error("getCrossDomainData promise failure :'( ...");
            });
    })
        .fail(function () {
            viewModel.SearchError("No results found. Try again!");
            deferred.reject();
            throw Error("getCrossDomainData promise failure :'( ...");
        });
    return deferred.promise();
};

var getScoresAndCountsFromScores = function (scores) {
    var scoresAndCounts = []; // {score=95, count=1}
    scores.forEach(function (x, ix) {
        var indexOfExisting = -1;
        scoresAndCounts.forEach(function (el, ix) {
            if (el.score === x)
                indexOfExisting = ix;
        });
        if (indexOfExisting > -1) { //increase count for existing item
            scoresAndCounts[indexOfExisting].count += 1;
        }
        else { 
            scoresAndCounts.push({
                score: x,
                count: 1
            });
        }
    });
    scoresAndCounts = scoresAndCounts.sort(function (a, b) {
        if (a.score > b.score) {
            return 1;
        }
    });
    return scoresAndCounts;
};

var getMovieNameFromHTML = function (html) {
    return jQuery(html).find(".product_page_title h1").html().trim();
};

var getImgSrcFromHTML = function (html) {
    var selector = ".summary_img";
    var elems = jQuery(html).find(selector);
    if (elems.length == 0) {
        throw new Error("Damnit. MetaCritic changed their img markup and broke this web scraper");
    }
    return elems.get(0)["src"];
};

var getDescriptionFromHTML = function (html) {
    var elems = jQuery(html).find(".blurb_expanded");
    if (elems.length == 0) {
        elems = jQuery(html).find(".summary_deck.details_section");
    }
    if (elems.length == 0) {
        console.error("Damnit. MetaCritic changed their description markup and broke this web scraper");
        return "";
    }
    return elems.get(0).innerHTML;
};

var parseScoresFromMetaCriticHTML = function (html) {
    var movieScoresSelector = ".review .metascore_w";
    var tagsWithScores = jQuery(html).find(movieScoresSelector);
    //note: this is a jquery object, not a JS array
    if (tagsWithScores.length == 0) {
        throw new Error("Damnit. MetaCritic changed their markup and broke this web scraper");
    }
    var scoreArray = [];
    var scoresJqArray = tagsWithScores.map(function (index, elem) {
        scoreArray.push(Number(elem.innerHTML));
        return Number(elem.innerHTML);
    });
    return scoreArray;
};


var getPopularMoviesFromHTML = function (html) {
    var htmlMovies = jQuery(html).find(".image_strip .product").toArray();
    if (htmlMovies.length == 0) {
        throw new Error("Damnit. MetaCritic changed their markup and broke this web scraper");
    }
    var movies = [];
    htmlMovies.forEach(function (x) {
        var title = jQuery(x).find(".title_wrapper a span").html().trim();
        var url = jQuery(x).find(".title_wrapper a").attr("href").replace("/movie/", "");
        var score = jQuery(x).find(".metascore_w").html();
        movies.push({
            Title: title,
            Score: score,
            FulUrl: urlBase + url,
            Url: url
        });

    });
    return movies;
};
