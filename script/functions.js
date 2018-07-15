$(document).ready(function () {


    $('#categoriMenu > a').click(function () {
        $(this).children().toggleClass('fa-angle-up')
        $(this).children().toggleClass("fa-angle-down");
    });



    $('#filterButton').click(function () {
        window.scrollTo(0,0);
        $('#filter').toggleClass('showContent');
        
    });

    //move aside menu..

$(window).on('load resize', function () {
    
        if ($(window).width() <= 991) {
            $('#filter').prependTo('body');
        }
        if ($(window).width() > 991) {
            $('#filter').appendTo('aside');
        }
    
    
    
    
    
    
    if ($(window).width() <= 767) {
            $('#collapsibleNavbar').prependTo('body');
        }
    
    if ($(window).width() > 767) {
            $('#collapsibleNavbar').appendTo('body > nav');
        }
    
    
    });

});
