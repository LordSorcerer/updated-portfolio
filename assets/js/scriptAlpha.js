function cloudMovement() {
    /*const $canvasCloud = $("#canvasCloud");
    const ctxCloud = $canvasCloud.getctx("2d");
    ctxCloud.fillStyle = "#FF0000";
    ctxCloud.fillRect(0, 0, 150, 75);*/
    var maxClouds = 1;
    for (i = 0; i < maxClouds; i++) {
        document.append("<canvas id='cloud" + i + "' width='100' height='57'>");
        var canvas = document.getElementById("cloud" + i);
        var ctx = canvas.getContext("2d");
        var cloud = document.getElementById("cloudImage");
        ctx.drawImage(cloud, 0, 0);
    }

    /*setInterval(function(){

    }, 2000);*/
}


$(document).ready(function() {
    //on.hover functions for the project images and labels
    $(".projectImageLarge, .projectImageSmall").hover(function() {
        $(this).children(".projectImage").css("filter", "brightness(40%)");
        $(this).children(".projectLabel").css("visibility", "visible");
    }, function() {
        $(this).children(".projectImage").css("filter", "brightness(100%)");
        $(this).children(".projectLabel").css("visibility", "hidden");
    });
    cloudMovement();
});