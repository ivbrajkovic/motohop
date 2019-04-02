$(document).ready( function () {
    var offset = 200;
    var windowTop = 0;
    var flyBox = document.getElementById('banner-1');
    var offsetToStart = flyBox.offsetTop - offset;        
    var offsetToEnd = flyBox.offsetTop + flyBox.offsetHeight + window.innerHeight;
        
    window.addEventListener('scroll', function () {
        if( window.innerWidth >= 768 ) {
            windowTop = document.body.scrollTop 
                        || document.documentElement.scrollTop;

            if (windowTop > offsetToStart && windowTop < offsetToEnd) {
                flyBox.style.transform = "translateY(-" + Math.round(
                    (windowTop - offsetToStart) / (offset / 35)) + "%)";
                //console.log('banner moved');
                
                /*for(i=0; i<arrayBoxsLength; i++) {
                    moveBox (arrayBoxs[i]);
                    console.log($(arrayBoxs[i]));
                }*/
            }
        }
    });
        //, throttleWait));
    
    //$.fn.moveBox = function () {
    /*function moveBox (id) {
        id.style.transform = "translateY(-" + Math.round(
                (windowTop - offsetToStart) / (offsetDifference / 50)) + "%)";
        
        /*console.log("windowTop: " + windowTop + "\n" +
                    "osffetToTop: " + offsetToTop + "\n" +
                    "offsetToTarget: " + offsetToStart + "\n" +
                    "windowTop - osffetToTop: " + (windowTop - offsetToTop) + "\n" +
                    "osffetToTop  - osffetToTarget: " + offsetDifference + "\n" +
                    "d1: " + Math.round((windowTop - offsetToStart) / (offsetDifference / 500))
        );
    }*/
});
