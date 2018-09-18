$(document).ready(function () {
    
    var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera() || isMobile.Windows());
    }
};
    
    if (isMobile.iOS()) {
    alert('is a iOS device');   
}
    if (isMobile.Android()) {
    alert('is a Android phone'); 
}  
    if (isMobile.Android()) {
    alert('is a Blackberry'); 
}  
    if (isMobile.Android()) {
    alert('is opera mini'); 
}  
    if (isMobile.Android()) {
    alert('is a windows phone'); 
}  
 
 
    

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































