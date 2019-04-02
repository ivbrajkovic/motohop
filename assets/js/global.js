
    var navbarNavlinkToggler = false;
    var delta = 150;
    var position = 0;
    var lastScrollTop = 0;
    var btnVisible = false;
    var navBarTrans = true;
    var navBarFadeOut = true;    
    var stoptransparency = $('#target-navbar-transparency').position().top / 2;
    var hidingmenu = $('#target-navbar-hide').position().top;
    var btnBackToTop = $('#back-to-top');
    var navBar = $('#transmenu');
 
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    }); 
    
    var url = window.location.href;
    if( url.indexOf('#') < 0 ) {
        window.location.replace(url + "#");
    } else {
        url = url.substring(0, url.indexOf("#") + 1);
        window.location.replace(url);
    }
    
    $('.nav-item a').on('click', function(e){        
        e.preventDefault();        
        navbarNavlinkToggler = true;  
        $('#navcol-1').collapse('hide');
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 65
        }, ($(this).parent().is(':first-child')) ? 1200 : 600, 
            function() { 
                navbarNavlinkToggler = false; 
            }
        );
    });
    
    $('.jumbotron').parents('div').css({'position': 'static',
                                        'z-index': '1'});    
    //$('.row.layout-slider > div').addClass('shadow-1');
    $('.button-fx').addClass('pulse-border-light-green');
    
    btnBackToTop.on('click' /*touchend*/, function () {   
        $(window).off('scroll', hideShowNavbar);  
        btnBackToTop.fadeOut();
        $('body').animate({
            scrollTop: 0
        }, 800, function () {
            $(window).on('scroll', hideShowNavbar);
            hideShowNavbar();
        });
    });
    
    // focus on hover and blur on leave
    $('.drop-shadow').hover( function () {
        $(this).focus();
    }, function () {
        $(this).blur();
    });    
    
    $(window).on('scroll', hideShowNavbar);
    //window.addEventListener('scroll', hideShowNavbar);
    
    function hideShowNavbar() {        
        position = document.body.scrollTop 
                    || document.documentElement.scrollTop; //$(this).scrollTop();        

        /*console.log("position: " + position + "\n"
                   + "stoptransparency: " + stoptransparency + "\n"
                   + "hidingmenu: " + hidingmenu);*/
        
        if (navbarNavlinkToggler) {
            lastScrollTop = position;
            //navbarNavlinkToggler = false;
        }
        
        // Prikazuje strelicu samo ako nije vec prikazana
        if (position > hidingmenu && btnVisible == false) {
            btnBackToTop.fadeIn();
            btnVisible = true; 
            //console.log("btnVisible = true");
        } else if (position < hidingmenu && btnVisible == true){
            btnBackToTop.fadeOut();
            btnVisible = false;
            //console.log("btnVisible = false");
        }        

        // Prikazuje transparentni meni
        if (position > stoptransparency && navBarTrans == true) {
            navBar.removeClass('transparency');
            navBarTrans = false; 
            //console.log("navBarTrans = false");
        } else if (position < stoptransparency && navBarTrans == false){
            navBar.addClass('transparency');
            navBarTrans = true;
            //console.log("navBarTrans = true");
        }

        /*console.log("lastScrollTop: " + lastScrollTop + "\n" +
                    "position: " + position + "\n" +
                    "delta: " + delta);*/
        
        // Ako je scroll manji od delte ne radi ništa
        if(Math.abs(lastScrollTop - position) <= delta) 
            return;
        
        
        // Sriva meni
        if (position > hidingmenu && position > lastScrollTop && navBarFadeOut == true) {   
            navBar.fadeOut(600);
           /*$("#transmenu").animate({
                opacity: '0',
                height: '0'
            }, 400);*/
            navBarFadeOut = false;
            //console.log("navBarTrans = fadeOut");
        } else if (position < lastScrollTop && navBarFadeOut == false) {
            navBar.fadeIn(600);
            /*$("#transmenu").animate({
                opacity: '1',
                height: '65px'
            }, 400);*/
            navBarFadeOut = true;
            //console.log("navBarTrans = fadeIn");
        }
       
        // Pamti zadnju poziciju
        lastScrollTop = position;
    }//); 
});
