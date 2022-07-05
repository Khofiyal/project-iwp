$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 90){
            $(".navbar").css("background-color","rgb(23, 23, 130)");
            $(".navbar").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else{
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
        }
    })
})