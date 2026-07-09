$(function () {
    $(window).scroll(function() {
        $("nav").stop().animate( {
            "top": $(window).scrollTop() +50
        }, 500);
    });
});