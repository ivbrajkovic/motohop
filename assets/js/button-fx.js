$(document).ready( function () {
    $('.button-fx').on('mousemove', function(e) {
        //console.log("x: " + e.pageX);
        //console.log("y: " + e.pageY);
        if( window.innerWidth >= 768 ) {
            var t = e.pageX - e.target.offsetLeft,
                i = e.pageY - e.target.offsetTop;
            e.target.style.setProperty("--x", t.toString() + "px"), e.target.style.setProperty("--y", i.toString() + "px")
        }
    });   
});