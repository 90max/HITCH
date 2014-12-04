$(window).scroll(function() {
    if ($("header").offset().top > 50) {
        $("header").addClass("headeredit");
    } else {
        $("header").removeClass("headeredit");
    }
});