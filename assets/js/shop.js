$(document).ready( function () {
    $(".bsi-header .bsi-button-container a").attr("href", "#specs")
    $(".bsi-header .bsi-button-container a").on('click', function(e){        
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 65
        }, 600);
    });
    
    var images = ['shop-h2-1.jpg', 
                  'shop-h2-2.jpg', 
                  'shop-h2-3.jpg'];    
    $('#shop-h2-image').css({'background-image': 'url(assets/img/shop/h2/' + images[Math.floor(Math.random() * images.length)] + ')'});
    
    var images = ['shop-h2-carb-1.jpg', 
                  'shop-h2-carb-2.jpg', 
                  'shop-h2-carb-3.jpg'];    
    $('#shop-h2-carb-image').css({'background-image': 'url(assets/img/shop/h2-carb/' + images[Math.floor(Math.random() * images.length)] + ')'});
    
    var images = ['shop-h2r-1.jpg', 
                  'shop-h2r-2.jpg', 
                  'shop-h2r-3.jpg', 
                  'shop-h2r-4.jpg', 
                  'shop-h2r-5.jpg', 
                  'shop-h2r-6.jpg'];    
    $('#shop-h2r-image').css({'background-image': 'url(assets/img/shop/h2r/' + images[Math.floor(Math.random() * images.length)] + ')'});
    
    var images = ['shop-h2-sx-1.jpg', 
                  'shop-h2-sx-2.jpg', 
                  'shop-h2-sx-3.jpg'];    
    $('#shop-h2-sx-image').css({'background-image': 'url(assets/img/shop/h2-sx/' + images[Math.floor(Math.random() * images.length)] + ')'});
    
    var images = ['shop-h2-sx-se-1.jpg', 
                  'shop-h2-sx-se-2.jpg', 
                  'shop-h2-sx-se-3.jpg', 
                  'shop-h2-sx-se-4.jpg', 
                  'shop-h2-sx-se-5.jpg',
                  'shop-h2-sx-se-6.jpg', 
                  'shop-h2-sx-se-7.jpg'];    
    $('#shop-h2-sx-se-image').css({'background-image': 'url(assets/img/shop/h2-sx-se/' + images[Math.floor(Math.random() * images.length)] + ')'});    
});