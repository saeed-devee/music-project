
//JQuery Codes

$(document).ready(function () { 
    $(".carousel-sliders").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true, //nav: true adds "Previous" and "Next" navigation arrows to the carousel, allowing users to manually go to the previous or next slide
        items: 1,
        navContainer: '.banner .custom-nav',
        dots: false //allows you to specify a custom container element for the navigation arrows
    }) //calling the owl plugin
}) //jQuery function that runs code as soon as the HTML document is fully loaded and the DOM is ready, but before all images, stylesheets, and other resources have fully loaded.

// FIXED MENU


let navbar = document.getElementById("navbar")

window.onscroll = function(){
    toggleMenu()
}

let sticky = navbar.offsetTop + navbar.offsetHeight

function toggleMenu(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("fixed")
    }
    else{
        navbar.classList.remove("fixed")
    }
}
