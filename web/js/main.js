//quand le document est pret ( a la fin du chargement de la page)
$(document).ready(function () {
    centreBtn();
    centreForm();
    $("body").css("visibility", "visible");
    centrerFormStats();
});
//quand on redimmensionne la fenetre
$(window).resize(function () {
    centreBtn();
    centreForm();
    centrerFormStats();
});

//quand on clique sur le bouton
$(".btnStart").click(function () {
    $(this).val('Combat');
    $(this).css({
        "background-color": "red"
    });
    $(this).fadeOut(600, function () {
        $("#formPlayer").fadeIn(600);
        $(this).val('Combat');
    });
});

function centreBtn() {

    var w = $(window).width();
    var h = $(window).height();

    var buttonw = $(".btnStart").width();
    var buttonh = $(".btnStart").height();

    var top = (h - buttonh) / 2;
    var left = (w - buttonw) / 2;

    $('.btnStart').css({
        "left": left + "px",
        "top": top + "px"
    });



}
;

function centreForm() {


    var w = $(window).width();
    var h = $(window).height();

    var buttonw = $("#formPlayer").width();
    var buttonh = $("#formPlayer").height();

    var top = (h - buttonh) / 2;
    var left = (w - buttonw) / 2;

    $('#formPlayer').css({
        "left": left + "px",
        "top": top + "px"
    });
    
}



  
    function centrerFormStats() {
    // on recupere les dimension de la fenetre
    var w = $(window).width();
    var h = $(window).height();
     var buttonw = $(".formStats").width();
    // on calcul la position du boutton afin qu'il soit centré
    var left = (w - buttonw)/2;
    var top = (h - $(".formStats").height()) / 2;
//    var left = (w - $(".form").width()) / 2;
    //on affecte les nouvelles position calcule
    $(".formStats").css({
        "left": left + "px",
        "top": top + "px"
    });
}

    