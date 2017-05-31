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
function topBar() {
    "use strict";
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-black", "");
    }
}

// called functions when page is scrolled
window.onscroll = function () {
    "use strict";
    topBar();
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