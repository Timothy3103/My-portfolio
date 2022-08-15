$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    })

    // slide-up script 
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    //toogle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i ').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Graphics Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Graphics Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});




//function sendEmail() {
//Email.send({
//  SecureToken: "4d7ce3e8-7f38-4813-86d8-058e0050fe04",

//To: 'oluwaseyitimothy99@gmail.com',
//From: document.getElementById("email").value,
//Subject: "New Contact Form Enquiry",
//Body: "Name: " + document.getElementById("name").value +
//  "<br> Email: " + document.getElementById("email").value +
//"<br> Subject: " + document.getElementById("subject").value +
//"<br> Message: " + document.getElementById("message").value
//}).then(
//message => alert("Message Sent Successfully")
//);
//}