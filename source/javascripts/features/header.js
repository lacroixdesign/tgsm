$(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
        $("#header").addClass("HeaderScroll");
    }
    else {
        $("#header").removeClass("HeaderScroll");
    }
});
