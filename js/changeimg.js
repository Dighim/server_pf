$(document).ready(function(){
    $(".img").html($("<img src='"+$(".img").text()+"' class='img-thumbnail img-responsive'>"));
    $(".img").show();
});