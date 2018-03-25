var idx = 1;

function set_body_height() { // set body height = window height
    $('body').css('height', $(window).height() + "px");
    $('body').css('width', $(window).width() + "px");
    $('.diapo').css('max-height', (0.8 * $('body').height()) + "px");
    $('.diapo').css('max-width', (0.9 * $('body').width()) + "px");
}
$(document).ready(function () {
    for (var i = 1; i <= 4; i++) {
        $(".img:nth-child(" + i + ")").html($("<img onclick='zoom(this)' src='" + $(".img:nth-child(" + i + ")").text() + "' class='diapo img-thumbnail img-responsive'>"));
    }
    $(".img:first-child").show();
    $(document).keydown(function (e) {
        e = e || window.event
        var code = e.which || e.keyCode
        if (code == 39) idx = (idx < 4) ? idx + 1 : 4;
        if (code == 37) idx = (idx > 1) ? idx - 1 : 1;
        $(".img").hide();
        $(".img:nth-child(" + idx + ")").show();
    });
    $(window).bind('resize', set_body_height);
    set_body_height();
});

function zoom(img) {
    $(img).elevateZoom({
        zoomType:"inner",
        scrollZoom:"true",
        responsive:"true"
    });
}
