//function myMap() {
//    "use strict";
//    var myCenter = new google.maps.LatLng(41.878114, -87.629798), mapOptions = {
//        center: myCenter,
//        zoom: 12,
//        scrollwheel: false,
//        draggable: false,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    },  map = new google.maps.Map(document.getElementById("googleMap"), mapOptions), marker = new google.maps.Marker({
//        position: myCenter
//    });
//    marker.setMap(map);
//}


// Change style of navbar on scroll

//$(allInView);
//$(window).scroll(allInView);


//function isScrolledIntoView(elem) {
//    var docViewTop = $(window).scrollTop(),
//        docViewBottom = docViewTop + $(window).height(),
//        elemTop = $(elem).offset().top,
//        elemBottom = elemTop + $(elem).height();
//
//    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//}
//
//function allInView() {
//    if (isScrolledIntoView($("p"))) {
//        $("p").fadeIn("slow");
//    }
//}

//function floatIn() {
//    "use strict";
//    var bodyTop = document.body.scrollTop,
//        elementTop = document.documentElement.scrollTop;
//    
//    if ((bodyTop > 150) && (bodyTop < 1100)) {
//        $(".intro").fadeIn("slow", function () {
//            $("#p1").fadeIn("slow", function () {
//                $("#vis").fadeIn("slow", function () {
//                    $("#visInd").fadeIn("slow", function () {
//                        $("#p2").fadeIn("slow", function () {
//                            $("#visGrp").fadeIn("slow", function () {
//                                $("#p3").fadeIn("slow", function () {
//                                    $("#p4").fadeIn("slow");
//                                });
//                            });
//                        });
//                    });
//                });
//            });
//        });
//    } else {
//        $(".intro").fadeOut("slow");
//        $("#p1").fadeOut("slow");
//        $("#vis").fadeOut("slow");
//        $("#visInd").fadeOut("slow");
//        $("#p2").fadeOut("slow");
//        $("#visGrp").fadeOut("slow");
//        $("#p3").fadeOut("slow");
//        $("#p4").fadeOut("slow");
//    }
////    else if ((document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) && (document.body.scrollTop < 150 || document.documentElement.scrollTop < 150)) {
////        $("b").fadeIn("slow");
////        $("#p1").fadeIn("slow");
////    } 
//}



function topBar() {
    "use strict";
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-black", "");
    }
}

// called functions when page is scrolled
window.onscroll = function () {
    "use strict";
//    console.log($(window).scrollTop());
    topBar();
//    floatIn();
};

// Used to toggle the menu on small screens when clicking on the menu button 
function toggleTopBar() {
    "use strict";
    var x = document.getElementById("navTop");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


// Image switching
var slideIndex = 1;
function showDivs(n) {
    "use strict";
    var i, x = document.getElementsByClassName("mySlides"), dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i += 1) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i += 1) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}

// called functions when page loads
window.onload = function () {
    "use strict";
    showDivs(1);
};

function plusDivs(n) {
    "use strict";
    showDivs(slideIndex += n);
}
function currentDiv(n) {
    "use strict";
    showDivs(slideIndex = n);
}
    
// Tab script
function displayEvent(evt, secName) {
    "use strict";
    var i, x, tablinks;
    x = document.getElementsByClassName("HQ");
    for (i = 0; i < x.length; i += 1) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i += 1) {
        tablinks[i].className = tablinks[i].className.replace(" w3-teal", "");
    }
    document.getElementById(secName).style.display = "block";
    
    evt.currentTarget.className += " w3-teal";
}





//$(document).ready(function () {
//    "use strict";
//        $(this).fadeIn("slow");
//    });
//});
//$(document).ready(function () {
//    "use strict";
//    $("img").on({
//        mouseenter: function () {
//            $(this).css("top", "100px");
//        },
//        mouseleave: function () {
//            $(this).css("bottom", "100px");
//        }
//
//    });
//});
//
//$(document).ready(function () {
//    "use strict";
//    $("p").hover(function () {
//        $(this).css("right", "100px");
//    });
//});

// JQueary
//$(document).ready(function () {
//    $("#p1").hover(function(){
//        alert("You entered p1!");
//    });
//});
