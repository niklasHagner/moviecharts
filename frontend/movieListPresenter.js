var movieListViewModel = {
    MovieListColumnClass: movieListContainerClsas,
    Movies: ko.observableArray([])
};
var movieListColumnClass = function () {
    var bootstrapWidth = Math.floor(movieListViewModel.Movies().length / 12);
    var bootstrapOffset = 0;
    return "col-md-" + bootstrapWidth + "col-md-offset-" + bootstrapOffset;
};

var addMovie = function () {
    return {
        Name: ko.observable(movieName),
        Description: ko.observable(""),
        Url: ko.observable(movieUrl),
        ImgSrc: ko.observable("")
    }
};

ko.bindingHandlers.fadeVisible = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        $(element).toggle(ko.unwrap(value));
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
    }
};