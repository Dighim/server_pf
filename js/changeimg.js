$(document).ready(function () {
    $(".img").html($("<img src='" + $(".img").text() + "' class='img-thumbnail img-responsive'>"));
    $(".img").show();
    $(document).keydown(function(e){
        e = e || window.event
        var code = e.which || e.keyCode
        if(code == 39) $(".img img").attr("src","https://www.wien.info/media/images/41161-campus-der-wirtschaftsuniversitaet-19to1.jpeg");
    });
});
