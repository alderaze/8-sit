/*global $, console, window*/
$(function () {

    'use strict';

    // start navbar
    $(".navbarr .fa-search ").on("click", function () {

        $(".navbarr .ser").toggleClass("width");
        $(".navbarr .min-nav li").fadeOut();
        $(this).fadeOut();
        $(".navbarr .fa-times ").fadeIn();


    });
     //scroll navbar body
        $(".navbarr .min-nav li").on("click", function () {
            

            var scroll = $($(this).data("scroll")).offset().top - 84;
            
            if ($(window).width() <= 992) {
                
                $(".navbarr .min-nav").fadeOut();
                $(".navbarr .btnn").fadeOut();
            }
            $("html,body").animate({

                scrollTop: scroll
            }, 700);

        });

    $(".navbarr .fa-times").on("click", function () {

        $(".navbarr .ser").toggleClass("width");
        $(".navbarr .min-nav li").fadeIn();
        $(this).fadeOut();
        $(".navbarr .fa-search ").fadeIn();


    });

    $(".navbarr .fa-bars").on("click", function () {

        if ($(window).width() <= 992) {

            $(".navbarr .min-nav").fadeToggle().width($(window).width()).height($(window).height());
            $(".navbarr .btnn").fadeToggle();
        } else {
            $(".navbarr .min-nav").fadeOut();

        }

    });

   
    $(window).resize(function () {
        
        if ($(window).width() <= 992) {

            $(".navbarr .min-nav").width($(window).width()).height($(window).height());
        } else {
            
            
            $(".navbarr .min-nav").css("width", "auto");

        }

        
    
    });



// scroll windows
    $(window).scroll(function () {



        if ($(window).scrollTop() > 1000) {

            $(".top").fadeIn();
        } else {
            $(".top").fadeOut();
        }


        if ($(window).scrollTop() > 2) {
            $(".navbarr").css({
                
                position: "fixed",
                
                backgroundColor: "rgba(0,0,0,.5)"

            });
        } else {
            $(".navbarr").css({
                position: "fixed",
                backgroundColor: "transparent"
            });
        }



     
       


    });
    
       // scrolltop 0

        $(".top").on("click", function () {

            $("html ,body").animate({

                scrollTop: 0
            });
        });



    //start home

   // $(".home").height($(window).height())
    $(".over").height($(window).height()).width($(window).width());
    
    $("body .home .container-fluid .row .left .vedio .on").on("click", function () {

        $(".over").fadeIn();
        $("body .home .container-fluid .row .left .vedio .ved .ifram").fadeIn();

    });
    $("body .home .container-fluid .row .left .vedio .tow").on("click", function () {

        var videoFile = "https://www.youtube.com/watch?v=yCo_bGFQCxc";
        $(".over").fadeIn();
        $("body .home .container-fluid .row .left .vedio .ved .ifram").fadeIn();

        $("body .home .container-fluid .row .left .vedio .tow .ifram iframe").attr('src', videoFile);
    
        

    });
    
    $(".over").on("click", function () {

        $(this).fadeOut();
        $("body .home .container-fluid .row .left .vedio .ved .ifram").fadeOut();


    });
    
    
    
    
  
    
    



    

});

