$(window).on("resize load", function(){
    var w = $(window).width();
    var h = $(window).height();

    $("#game").css("width", w + "px");
    $("#game").css("height", h + "px"); 

    render.setCanvasSize(w, h);
});
