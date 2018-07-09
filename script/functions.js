$( document ).ready(function() {
    
    
    $('#categoriMenu > a').click(function() {
        $(this).children().toggleClass('fa-angle-up')
        $(this).children().toggleClass("fa-angle-down");
});
    
    
    
    $('#filterButton').click(function() {
        $('#filter').toggleClass('showContent');
    });
    
});


