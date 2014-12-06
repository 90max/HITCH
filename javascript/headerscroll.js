$(window).scroll(function() {
    if ($(".nav-bar").offset().top > 50) {
        $(".nav-bar").addClass("nav-bar-edit");
    } else {
        $(".nav-bar").removeClass("nav-bar-edit");
    }
});