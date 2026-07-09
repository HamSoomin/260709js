$(function() {
    $("a").click(function() {
        $("body").append("<div id='bg'>");
        $("body").append("<div id='photo'>");

        $("#bg, #photo").hide();

        $("#photo").html("<img>");

        $("#photo img").attr("src", $(this).attr("href"));
        $("#photo img").attr("alt", $(this).attr("alt"));

        $("#bg, #photo").fadeIn(800);

        $("#bg").click(function() {
            $(this).fadeOut(function() {
                $(this).remove();
            });
            $("#photo").fadeOut(function() {
                $(this).remove();
            });
        });

        return false;
    });
});