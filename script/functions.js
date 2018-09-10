$(document).ready(function () {

    $('#categoriMenu > a').click(function () {
        $(this).children().toggleClass('fa-angle-up')
        $(this).children().toggleClass("fa-angle-down");
    });

    $('#filterButton').click(function () {
        window.scrollTo(0, 0);
        $('#filter').toggleClass('showContent');

    });
    
    $('body > nav > button').click(function () {
        window.scrollTo(0, 0);
        $('#collapsibleNavbar').toggleClass('showContent');
    });
    
    $('#closer').click(function () {
        $('#collapsibleNavbar').removeClass('showContent collapse show');
    });
    
    $('#closer-kategori').click(function () {
        $('#filter').removeClass('showContent');
    });

    $('#clear-all').click(function () {
        $('#categoriMenu > div > ul > li > label > input').prop('checked', false);
    })
    
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
        }

        if ($(window).width() > 767) {
            $('#collapsibleNavbar').appendTo('body > nav');
            $('body > header > nav').insertAfter('body > header');
        }


    });
    
    if ( ms_ie ) {
    $('body > main > section:nth-child(2) > article').removeClass('col-lg-9').addClass('col-lg-8');
}
});
