jQuery(window).load(function(){
    $('.slider').fractionSlider({
        'autoChange' :          false,
        'controls': 			true

        /*'timeout': 			    5000*/
    });
});

$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top -20
        }, 500);
        e.preventDefault();
    });
    return false;
});

$(function(){
    $('.navi').click(function(){
        $('.active').removeClass('active').addClass('navi');
        $(this).removeClass('navi').addClass('active');
    });
});

/***********parallax**************/
var minql = window.matchMedia("(min-width: 1025px)");
if (minql.matches) {
    $(window).scroll(function(e){
        parallax();
    });
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('top',-(scrolled*0.02)-500+'px');
        $('.bg1').css('top',(scrolled*0.21)+13+'px');
        $('.bg2').css('top',-(scrolled*0.19)-295+'px');
        $('.bg3').css('top',(scrolled*0.019)+33+'px');
        $('.bg4').css('top',-(scrolled*0.022)+200+'px');
        $('.bg5').css('top',-(scrolled*0.02)-2450+'px');
        $('.bg6').css('top',(scrolled*0.15)-965+'px');
        $('.bg7').css('top',-(scrolled*0.06)-20+'px');
        $('.bg8').css('top',-(scrolled*0.01)-795+'px');
        $('.bg9').css('top',(scrolled*0.01)-830+'px');
        $('.bg10').css('top',-(scrolled*0.07)-390+'px');
        $('.bg11').css('top',-(scrolled*0.06)-190+'px');
    }
}

/**********countdown*************/
$(document).ready(function(){
    $("#countdown").countdown({
            date: "01 january 2015 00:00:00",
            format: "on"
        },
        function() {
            // callback function
        });
});
function popup_position(){
    var my_popup = $('.modal'), // наш попап
        my_popup_w = my_popup.width(), // ширина попапа
        my_popup_h = my_popup.height(), // высота попапа
        popup_half_w = my_popup_w/2, // половина ширины попапа
        popup_half_h = my_popup_h/2, // половина высоты попапа
        win_w = $(window).width(), // ширина окна
        win_h = $(window).height(); // высота окна

    if ( win_w > my_popup_w ) { // если ширина окна больше ширины попапа
        my_popup.css({'margin-left':-popup_half_w, 'left': '50%'});
    }
    if ( win_w < my_popup_w ) { // если ширина окна меньше ширины попапа
        my_popup.css({'margin-left': 5, 'left': '0'});
    }
    if ( win_h > my_popup_h ) { // если высота окна больше ширины попапа
        my_popup.css({'margin-top': -popup_half_h, 'top':'50%'});
    }
    if ( win_h < my_popup_h ) { // если высота окна меньше ширины попапа
        my_popup.css({'margin-top': 5, 'top': '0'});
    }
}

$(document).ready(function(){
    popup_position();
});
$(window).resize(function(){
    popup_position();
});
/*************modals**************/
jQuery(function($){
    // bind event handlers to modal triggers
    $('body').on('click', '.trigger', function(e){
        e.preventDefault();
        $('#test-modal').modal().open();
    });

    // attach modal close handler
    $('.modal .close').on('click', function(e){
        e.preventDefault();
        $.modal().close();
    });

    // below isn't important (demo-specific things)
    $('.modal .more-toggle').on('click', function(e){
        e.stopPropagation();
        $('.modal .more').toggle();
    });
});

jQuery(function($){
    // bind event handlers to modal triggers
    $('body').on('click', '.trigger-0', function(e){
        e.preventDefault();
        $('#test-modal-1').modal().open();
    });

    // attach modal close handler
    $('.modal .close').on('click', function(e){
        e.preventDefault();
        $.modal().close();
    });

    // below isn't important (demo-specific things)
    $('.modal .more-toggle').on('click', function(e){
        e.stopPropagation();
        $('.modal .more').toggle();
    });
});

jQuery(function($){
    // bind event handlers to modal triggers
    $('body').on('click', '.trigger-1', function(e){
        e.preventDefault();
        $('#frame-modal').modal().open();
    });

    // attach modal close handler
    $('#frame-modal .close').on('click', function(e){
        e.preventDefault();
        $.modal().close();
    });

    // below isn't important (demo-specific things)
    $('#frame-modal .more-toggle').on('click', function(e){
        e.stopPropagation();
        $('.modal .more').toggle();
    });
});
/************SCROLL UP***************/
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
/*top_menu*/
$('.menu_2').click(function() {
    var $elemOn = $('.one.on'),
        $elemOff = $('.one.off');
    $elemOff.fadeIn(250).removeClass('off').addClass('on');
    $elemOn.fadeOut(0).removeClass('on').addClass('off');
});



