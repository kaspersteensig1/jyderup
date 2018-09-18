$(document).ready(function () {
    
    $(".navbar-toggler-icon").on('click', function () {
        $(".brugerlogin").hide();
        $(".shopping-bag").hide();
    });   
    $("#filterButton").on('click', function () {
        $(".brugerlogin").hide();
        $(".shopping-bag").hide();
    });   
 
 
    $('body').bind('click', function (e) {
        if ($(e.target).closest('.navbar-collapse').length === 0) {
            // click happened outside of .navbar, so hide
            var menuOpened = $('.navbar-collapse').hasClass('show');
            if (menuOpened === true) {
                $("#closer").click();
            }
        }       
        if ($(e.target).closest('#filter').length === 0 && e.target.id != "filterButton") {
            // click happened outside of .navbar, so hide           
            var filterOpened = $('#filter').hasClass('showContent');
            if (filterOpened === true) {
                $("#filterButton").click();               
            }
        }
 
    });   

    $('#categoriMenu > a').click(function () {
        $(this).children().toggleClass('fa-angle-up');
        $(this).children().toggleClass("fa-angle-down");
    });

    $('#filterButton').click(function () {
        window.scrollTo(0, 0);
        $('#filter').toggleClass('showContent');

    });

    $('.navbar > button').click(function () {
        window.scrollTo(0, 0);
        $('#collapsibleNavbar').toggleClass('showContent');
    });

    $('#closer').click(function () {
        $('#collapsibleNavbar').removeClass('showContent collapse show');
    });

    $('#closer-kategori').click(function () {
        $('#filter').removeClass('showContent');
    });
    
    
    
    $('#closer-kategori-button').click(function () {
        $('#filter').removeClass('showContent');
    });

    //move aside menu..
    $(window).on('load resize', function () {

        if ($(window).width() <= 991) {
            $('#filter').prependTo('body');
            $('#sortringValg').appendTo('aside');

        }
        if ($(window).width() > 991) {
            $('#filter').appendTo('aside');
            $('#sortringValg').insertAfter('body > main > section:nth-child(2) > article > div > div.col-lg-9');
        }
        if ($(window).width() <= 767) {
            $('#collapsibleNavbar').prependTo('body');
            $('body > nav').insertAfter('body > header > section.topbar');
            $('#collapsibleNavbar > span > div#wrap').insertAfter('body > header > nav > button');
            $('body > header > nav').append('<ul id="user-menu"></ul>');
            $('#user-login').prependTo('#user-menu');
            $('#shopping-bag').insertAfter('#user-login');
            $('#sec-menu').insertBefore('footer');
            $('#user-menu:nth-child(4)').remove('#user-menu');
            $('#sec-menu:nth-child(6)').remove();
        }
        if ($(window).width() > 767) {
            $('#collapsibleNavbar').appendTo('body > nav');
            $('body > header > nav').insertAfter('body > header');
            $('#sec-menu').insertAfter('.logo');
            $('#user-login').appendTo('#sec-menu');
            $('#shopping-bag').insertAfter('#user-login');
            $('div#wrap').prependTo('#collapsibleNavbar > span');
        }
    });
    if (isIE()) {
        $('body > main > section:nth-child(2) > article').removeClass('col-lg-9');
        $('body > main > section:nth-child(2) > article').addClass('col-lg-8');
    }
    
    
    
    
    
    
    
    
    
    
    
});

function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}































