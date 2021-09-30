/**
 * Template Name: TheEvent - v4.3.0
 * Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */


(function () {

    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        if (!header.classList.contains('header-scrolled')) {
            offset -= 20
        }

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    /**
     * Gallery Slider
     */
    new Swiper('.gallery-slider', {
        speed: 400,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });

    /**
     * Initiate gallery lightbox
     */
    const galleryLightbox = GLightbox({
        selector: '.gallery-lightbox'
    });

    /**
     * Buy tickets select the ticket type on click
     */
    on('show.bs.modal', '#buy-ticket-modal', function (event) {
        select('#buy-ticket-modal #ticket-type').value = event.relatedTarget.getAttribute('data-ticket-type')
    })

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

    // test
 
    /* --------------------------
     * GLOBAL VARS
     * -------------------------- */
// The date you want to count down to
    var targetDate = new Date("2021/10/02 00:00:00");

// Other date related variables
    var days;
    var hrs;
    var min;
    var sec;

    /* --------------------------
     * ON DOCUMENT LOAD
     * -------------------------- */
    $(function () {
        // Calculate time until launch date
        timeToLaunch();
        // Transition the current countdown from 0
        numberTransition('#days .number', days, 1000, 'easeOutQuad');
        numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
        numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
        numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
        // Begin Countdown
        setTimeout(countDownTimer, 1001);
    });

    /* --------------------------
     * FIGURE OUT THE AMOUNT OF
       TIME LEFT BEFORE LAUNCH
     * -------------------------- */
    function timeToLaunch() {
        // Get the current date
        var currentDate = new Date();

        // Find the difference between dates
        var diff = (currentDate - targetDate) / 1000;
        var diff = Math.abs(Math.floor(diff));

        // Check number of days until target
        days = Math.floor(diff / (24 * 60 * 60));
        sec = diff - days * 24 * 60 * 60;

        // Check number of hours until target
        hrs = Math.floor(sec / (60 * 60));
        sec = sec - hrs * 60 * 60;

        // Check number of minutes until target
        min = Math.floor(sec / (60));
        sec = sec - min * 60;
    }

    /* --------------------------
     * DISPLAY THE CURRENT
       COUNT TO LAUNCH
     * -------------------------- */
    function countDownTimer() {

        // Figure out the time to launch
        timeToLaunch();

        // Write to countdown component
        $("#days .number").text(days);
        $("#hours .number").text(hrs);
        $("#minutes .number").text(min);
        $("#seconds .number").text(sec);

        // Repeat the check every second
        setTimeout(countDownTimer, 1000);
    }

    /* --------------------------
     * TRANSITION NUMBERS FROM 0
       TO CURRENT TIME UNTIL LAUNCH
     * -------------------------- */
    function numberTransition(id, endPoint, transitionDuration, transitionEase) {
        // Transition numbers from 0 to the final number
        $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
            duration: transitionDuration,
            easing: transitionEase,
            step: function () {
                $(id).text(Math.floor(this.numberCount));
            },
            complete: function () {
                $(id).text(this.numberCount);
            }
        });
    };

})()

//why maestro panels animation


$(".wm1").hover(
    function(){
        $("#wm1").collapse("show");
    }
);
$(".wm2").hover(
    function(){
        $("#wm2").collapse("show");
    }
);
$(".wm3").hover(
    function(){
        $("#wm3").collapse("show");
    }
);
$(".wm4").hover(
    function(){
        $("#wm4").collapse("show");
    }
);
$(".wm5").hover(
    function(){
        $("#wm5").collapse("show");
    }
);

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < 5; i++){
span[i].onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}
}


span.onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    
  }
    if (event.target == modal2) {
    modal2.style.display = "none";
    
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
    
  }
}




