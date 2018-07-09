$(document).ready(function () {


    $('#categoriMenu > a').click(function () {
        $(this).children().toggleClass('fa-angle-up')
        $(this).children().toggleClass("fa-angle-down");
    });



    $('#filterButton').click(function () {
        $('#filter').toggleClass('showContent');
    });

    //move aside menu..


    $(window).resize(function () {
        if ($(window).width() <= 991) {
            $('#filter').prependTo('body');
        }
        else {
            $('#filter').appendTo('aside');
        }
    });

});
