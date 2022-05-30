var movieListViewModel = {
    Movies: ko.observableArray([])
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