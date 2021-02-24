$(function () {

    'use strict';

    // start navbar
    $(".navbarr .fa-search").on("click", function () {

        $(".navbarr .ser").toggleClass("width");
        $(".navbarr .min-nav li").fadeOut();
        $(this).fadeOut();
        $(".navbarr .fa-times ").fadeIn()


    })
    //scroll navbar body
    $(".navbarr .min-nav li").on("click", function () {

        var scroll = $($(this).data("scroll")).offset().top - 84;
        console.log($(this).data("scroll"))
        if ($(window).width() <= 992) {
            $(".navbarr .min-nav").fadeOut()
            $(".navbarr .btnn").fadeOut()
        }
        $("html,body").animate({

            scrollTop: scroll
        }, 700)

    })
    $(".navbarr .fa-times").on("click", function () {

        $(".navbarr .ser").toggleClass("width");
        $(".navbarr .min-nav li").fadeIn();
        $(this).fadeOut();
        $(".navbarr .fa-search ").fadeIn()


    })

    $(".navbarr .fa-bars").on("click", function () {

        if ($(window).width() <= 992) {

            $(".navbarr .min-nav").fadeToggle().width($(window).width()).height($(window).height())
            $(".navbarr .btnn").fadeToggle()
        } else {
            $(".navbarr .min-nav").fadeOut()

        }

    })

    $(window).resize(function () {

        if ($(window).width() <= 992) {

            $(".navbarr .min-nav").width($(window).width()).height($(window).height())
        } else {
            $(".navbarr .min-nav").css("width", "auto")

        }


    });



    // scroll windows
    $(window).scroll(function () {



        if ($(window).scrollTop() > 1000) {

            $(".top").fadeIn()
        } else {
            $(".top").fadeOut()
        }


        if ($(window).scrollTop() > 2) {
            $(".navbarr").css({
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.5)",

            })
        } else {
            $(".navbarr").css({
                position: "fixed",
                backgroundColor: "transparent"
            })
        }








    })

    // scrolltop 0

    $(".top").on("click", function () {

        $("html ,body").animate({

            scrollTop: 0
        })
    })



    //start home

    //$(".home").height($(window).height())
    $(".over").height($(window).height()).width($(window).width())
    $("body .home .container-fluid .row .left .vedio .on").on("click", function () {

        $(".over").fadeIn()
        $("body .home .container-fluid .row .left .vedio .ved .ifram").fadeIn()

    })
    $("body .home .container-fluid .row .left .vedio .tow").on("click", function () {

        var videoFile = ""
        $(".over").fadeIn()
        $("body .home .container-fluid .row .left .vedio .ved .ifram").fadeIn();

        $(".over").on("click", function () {

            $(this).fadeOut();
            $("body .home .container-fluid .row .left .vedio .ved .ifram").fadeOut()


        })


    })


    var one = $("#one");
    var tow = $("#tow");

    if($(window).width() > 768){
        one.owlCarousel({
            items:2,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        $('.play').on('click',function(){
            one.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            one.trigger('stop.owl.autoplay')
        });
    
        tow.owlCarousel({
            items:5,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        $('.play').on('click',function(){
            tow.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            tow.trigger('stop.owl.autoplay')
        });
    
    

    }else if($(window).width() <= 768){
        one.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        $('.play').on('click',function(){
            one.trigger('play.owl.autoplay',[3000])
        })
        $('.stop').on('click',function(){
            one.trigger('stop.owl.autoplay')
        });
    
        tow.owlCarousel({
            items:2,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        $('.play').on('click',function(){
            tow.trigger('play.owl.autoplay',[3000])
        })
        $('.stop').on('click',function(){
            tow.trigger('stop.owl.autoplay')
        });
    
    

    }

    $("body .test2 .mo").width($("body .test2 .owl-carousel .owl-item").width()+5)
    $("body .test2 .mo").height($("body .test2 .owl-carousel .owl-item").height()+20)
   






    $("body .choose .center .bot .btn:first-of-type").on("click",function () {

        $("body .choose .ddd .card .uy").removeClass("show");
        $("body .choose .ddd .card .eee:last-of-type").addClass("show");
        $(this).css({

            backgroundColor:"#fff",
            color:"black"
        });
        $("body .choose .center .bot .btn:first-of-type").css({

            backgroundColor:"transparent!important",
            color:"rgba(52, 61, 72, 0.8)!important"
        })
    })
    $("body .choose .center .bot .btn:last-of-type").on("click",function () {

        $("body .choose .ddd .card .eee:last-of-type").removeClass("show");
        $("body .choose .ddd .card .uy").addClass("show")

        $(this).css({

            backgroundColor:"#fff!important",
            color:"black!important"
        });
        $("body .choose .center .bot .btn:last-of-type").css({

            backgroundColor:"transparent!important",
            color:"rgba(52, 61, 72, 0.8)!important"
        })
    })

 


});