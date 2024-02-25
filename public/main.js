$(document).ready(function () {
    firstTimeLoading = true;
    var param_MovieName = getUrlHash();
    if (param_MovieName !== null || param_MovieName !== "") {
        searchByUrlParam = true;
    }
    var movieName = param_MovieName;
    var movieUrl = movieName;

    bindView();

    populateFirstPageAsyc().then(function (movies) {
        var popularMovies = movies.popularMovies;
        if (movieName == null || movieName == "") {
            movieName = popularMovies[0].Title;
            movieUrl = popularMovies[0].Url;
            setMovieName(movieName);
        }
        fetchDataForOneFilmAndDisplayItsReviews(movieUrl, searchByUrlParam);
    });
});

var fetchDataForOneFilmAndDisplayItsReviews = async function (movieUrl, searchByUrlParam) {
    let reviewArray = await getReviewArrayAsync(movieUrl);
    if (searchByUrlParam) {
        setUrlHash(movieUrl);
    }
    populateMovieScoreByCriticsHTML(reviewArray);

    //Max 4 reviews, top2 and bottom2
    if (reviewArray.length > 4) {
        reviewArray = [reviewArray[0], reviewArray[1], reviewArray[reviewArray.length-2], reviewArray[reviewArray.length-1]];
    }
    viewModel.Reviews(reviewArray);
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
        title = $("#searchBox").val().trim();
        urlEncodedTitle = title.replace(/[,;: ]+/g, "-").replace("'","").toLowerCase();
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
    NewReleases: ko.observableArray([]),
    MoviesOnStreamingServices: ko.observableArray([]),
};

var populateMovieScoreByCriticsHTML = function (reviewArray) {
    //options
    var NORMALIZE_SCORES = true;
    var PERCENTAGE_SCORES = true;
    //Example object: { score: 90, text "a good movie" } 
    const allScores = reviewArray.map(x => Number(x.score));
    const scoresAndCounts = getScoresAndCountsFromScores(allScores);
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
        yValues = [];
        xValues = [];
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

    Highcharts.chart('highcharts-container', {
        chart: {
          type: 'column',
          style: {
              fontFamily: "'Alfa Slab One', Helvetica, sans-serif",
          }
        },
        title: {
          text: 'Review scores'
        },
        legend: { enabled:false },
        subtitle: { enabled:false },
        xAxis: {
          categories: [
            '0%',
            '10%',
            '20%',
            '30%',
            '40%',
            '50%',
            '60%',
            '70%',
            '80%',
            '90%',
            '100%',
          ],
          crosshair: true,
          style: { fontSize: '16px' }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Reviewers', style: { fontSize: '16px' }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} % of reviewers</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [{
          name: 'Grades',
          data: percentages
        }]
    });
};


var bindView = function () {
    if (firstTimeLoading)
        ko.applyBindings(viewModel);
    firstTimeLoading = false;
};

var setMovieName = function (movieName, movieUrl) {
    viewModel.Movie.Name(movieName);
};

/*
    returns { popularMovies: [], moviesOnStreamingServices: [] }
*/
var populateFirstPageAsyc = function () {
    var deferred = jQuery.Deferred();
    getFirstPageAsync().then(function (firstPageHTML) {
        var allMovies = transformFirstPageHtmlToMoviesJson(firstPageHTML)
            .filter(x => isNaN(x.Score)===false );
        allMovies = getUniqueByValue(allMovies, 'fullUrl');

        var popularMovies = allMovies
            .filter(x => x.isOnStreamingServices===false )
            .sort(function (a, b) {
                var sortResult = Number(a.Score) >= Number(b.Score) ? -1 : 1; //SORTING RETURN VALUES: [0=noChange, 1=Afirst, -1=eBfirst]
                return sortResult;
            })
        var moviesOnStreamingServices = allMovies
            .filter(x => x.isOnStreamingServices === true)
            .sort(function(a,b) {
                var sortResult = Number(a.Score) >= Number(b.Score) ? -1 : 1; //SORTING RETURN VALUES: [0=noChange, 1=Afirst, -1=eBfirst]
                return sortResult;
            });

        viewModel.NewReleases(popularMovies);
        viewModel.MoviesOnStreamingServices(moviesOnStreamingServices);
        deferred.resolve({popularMovies, moviesOnStreamingServices});
    });
    return deferred.promise();
};

var getFirstPageAsync = function () {
    var firstPageUrl = "http://www.metacritic.com/movie";
    var deferred = jQuery.Deferred();
    getCrossDomainData(firstPageUrl)
        .done(function (firstPageHTML) {
            deferred.resolve(firstPageHTML);
        })
        .fail(function () {
            viewModel.SearchError("Could not load the first page, AAARGH!");
            deferred.reject("could not get first page");
            throw Error("getCrossDomainData promise failure. CRAP!");
        });

    return deferred.promise();
};

var getReviewArrayAsync = async function (urlEncodedTitle) {
    ///search for a movie and populate the page

    var url = movieUrl = urlBase + urlEncodedTitle + urlEnd;

    const movieDetailsResponse = await (await getMovieDetails(url));
    if (!movieDetailsResponse.ok) {
        console.error("Call failed:", url);
        return;
    }
    const movieData = await movieDetailsResponse.json();
    viewModel.Movie.Name(movieData.name);
    viewModel.Movie.Description(movieData.description);
    viewModel.Movie.ImgSrc(movieData.img);
    
    //returns array of {score: "90", text: ""}
    const reviewArray = await getReviewsAsync(url + "/critic-reviews");
    if (!movieDetailsResponse.ok) {
        viewModel.Scores([]);
        viewModel.ScoresAndCounts([]);
        viewModel.SearchError("No reviews found. Try again!");
        throw Error("getCrossDomainData promise failure :'( ...");
        return [];
    }
    viewModel.SearchError("");
    return reviewArray;
};

/*
Input: [90,90,80]
Output: [{score: 90, count: 2}, {score: 80, count: 1}]
*/
var getScoresAndCountsFromScores = function (scores) {
    let reducedArray = scores.reduce( (acc, curr, _, arr) => {
        if (acc.length == 0) acc.push({score: curr, count: 1})
        else if (acc.findIndex(f => f.score === curr ) === -1) acc.push({score: curr, count: 1})
        else ++acc[acc.findIndex(f => f.score === curr)].count
        return acc
    }, []);
    return reducedArray;
};

/*
Metacritic has two html structures
* old https://www.metacritic.com/movie/the-janes
* new https://www.metacritic.com/movie/top-gun-maverick
*/

var getMovieNameFromHTML = function (html) {
    let titleEl = jQuery(html).find(".product_page_title h1");
    if (titleEl.length === 0) {
        titleEl = jQuery(html).find(".c-entertainmentProductInfoCard_info h1");
    }
    
    return titleEl.text().trim();
};

var getImgSrcFromHTML = function (html) {
    var elems = jQuery(html).find(".summary_img");
    if (elems.length === 0) {
        elems = jQuery(html).find(".c-cmsImage");
        if (elems.length === 0) {
            console.error("Damnit. MetaCritic changed their img markup and broke this web scraper");
            return "";
        }
    }
    return elems.get(0)["src"];
};

var getDescriptionFromHTML = function (html) {
    var elems = jQuery(html).find(".blurb_expanded");
    if (elems.length == 0) {
        elems = jQuery(html).find(".summary_deck.details_section");
    }
    if (elems.length == 0) {
        elems = jQuery(html).find(".c-entertainmentProductDetails_description");
        if (elems.length == 0) {
            console.error("Damnit. MetaCritic changed their description markup and broke this web scraper");
            return "";
        }
    }
    return elems.get(0).innerText;
};

// var parseScoresFromMetaCriticHTML = function (html) {
//     var movieScoresSelector = ".review .metascore_w";
//     var tagsWithScores = jQuery(html).find(movieScoresSelector);
//     if (tagsWithScores.length == 0) {
//         console.error("Damnit. MetaCritic changed their markup for `review .metascore_w`");
//         return [];
//     }
//     var scoreArray = [];
//     var scoresJqArray = tagsWithScores.map(function (index, elem) {
//         scoreArray.push(Number(elem.innerHTML));
//         return Number(elem.innerHTML);
//     });
//     return scoreArray;
// };

var transformFirstPageHtmlToMoviesJson = function (html) {
    var htmlMovies = jQuery(html).find(".c-globalProductCard").toArray();
    if (htmlMovies.length == 0) {
        throw new Error("Damnit. MetaCritic changed their markup and broke this web scraper");
    }
    var movies = [];
    htmlMovies.forEach(function (x) {
        var title = jQuery(x).find(".c-globalProductCard_title").text().trim();
        var url = jQuery(x).find("a.c-globalProductCard_container").attr("href").replace("/movie/", "");
        var score = jQuery(x).find(".c-siteReviewScore span").text();
        var isOnStreamingServices = jQuery(x).closest('[data-cy="movies-in-theaters-0"]').length > 0;
        movies.push({
            Title: title,
            Score: score,
            fullUrl: urlBase + url,
            Url: url,
            isOnStreamingServices
        });

    });
    return movies;
};
