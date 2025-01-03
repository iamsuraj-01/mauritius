(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate The wowjs
    new WOW().init();

    // Navbar Toggler
    const toggler = document.getElementById('navbarToggler');
    const menuIcon = document.getElementById('menuIcon');
    const menuText = document.getElementById('menuText');

    // Add a click event listener to the toggler button
    toggler.addEventListener('click', function() {
        // Toggle the icon and the visibility of the text
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            menuText.style.display = 'none';  // Hide the "Menu" text
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            menuText.style.display = 'inline';  // Show the "Menu" text
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    /*
    // Back To Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // Smooth scroll to the top
        return false; // Prevent default behavior (for safety)
    });
    */

    // Whatsapp Button
    document.addEventListener("DOMContentLoaded", function() {
        var whatsappLink = document.getElementById("whatsapp-link");
        var phoneNumber = "918791881683"; // Your WhatsApp number
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile devices
            whatsappLink.href = "https://wa.me/" + phoneNumber;
        } else {
            // Desktop devices
            whatsappLink.href = "https://web.whatsapp.com/send?phone=" + phoneNumber;
        }
    });

    // Testimonial Slider
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })

    $(document).ready(function(){
        $(".reservation-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
        });
      });
      

    // Gallery Slider
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,             // Enable auto play
        pause: 2000,            // Time in milliseconds between slides
        speed: 700,             // Speed of the slide transition
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        }
    });

    // JavaScript to handle image click and show in modal
    $(document).on('click', '.slide-img', function() {
        var src = $(this).attr('src');
        $('#modalImage').attr('src', src);
        $('#galleryModal').modal('show');
    });

    $(document).ready(function(){
        // Date Picker
        $('#date').datepicker({
            dateFormat: 'mm/dd/yy',
            changeMonth: true,
            changeYear: true
        });
        $('#date2').datepicker({
            dateFormat: 'mm/dd/yy',
            changeMonth: true,
            changeYear: true
        });
    });

    // Time Picker
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Flatpickr as a time picker
        flatpickr("#timepicker", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "h:i K",   // 12-hour format with AM/PM
            time_24hr: false,
            minuteIncrement: 30,   // 30-minute intervals
            minTime: "10:00",      // Start time (10:00 AM)
            maxTime: "23:00",      // End time (11:00 PM)
            defaultDate: "10:00",  // Default time shown
            theme: "bootstrap5"    // Optional Bootstrap 5 theme
        });
    });

    // Table Form Submission
    $(document).ready(function() {
        $("#tableForm").on("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            const fullName = $("input[name='fullName']").val();
            const email = $("input[name='email']").val();
            const phone = $("input[name='phone']").val();
            const date = $("input[name='date']").val();
            const time = $("input[name='time']").val();
            const numPersons = $("input[name='numPersons']").val();
            const specialRequest = $("textarea[name='specialRequest']").val();
    
            // Create an array for the message lines
            const messageLines = [
                `Table Booking Request:`,
                `Name:               ${fullName}`,
                `Email:              ${email}`,
                `Phone:              ${phone}`,
                `Date:               ${date}`,
                `Time:               ${time}`,
                `Number of Persons:  ${numPersons}`,
                `Special Request:    ${specialRequest}`
            ];
    
            // Join the message lines with line breaks
            const message = messageLines.join('\n');
    
            // Detect if the user is on mobile or desktop
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const whatsappUrl = isMobile 
                ? `https://wa.me/918791881683?text=${encodeURIComponent(message)}`  // Mobile link
                : `https://web.whatsapp.com/send?phone=918791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link
    
            // Open WhatsApp link
            window.open(whatsappUrl, '_blank');
    
            // Show Thank You Modal
            $("#thankYouModal").modal('show');
        });
    });

    // Room Form Submission
    $(document).ready(function() {
        $("#roomForm").on("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            const fullName = $("input[name='fullName']").val();
            const email = $("input[name='email']").val();
            const phone = $("input[name='phone']").val();
            const date1 = $("input[name='date1']").val();
            const date2 = $("input[name='date2']").val();
            const time = $("input[name='time']").val();
            const numPersons = $("input[name='numPersons']").val();
            const specialRequest = $("textarea[name='specialRequest']").val();
    
            // Create an array for the message lines
            const messageLines = [
                `Room Booking Request:`,
                `Name:               ${fullName}`,
                `Email:              ${email}`,
                `Phone:              ${phone}`,
                `Date Of Arrival:    ${date1}`,
                `Date Of Departure:  ${date2}`,
                `Time:               ${time}`,
                `Number of Persons:  ${numPersons}`,
                `Special Request:    ${specialRequest}`
            ];
    
            // Join the message lines with line breaks
            const message = messageLines.join('\n');
    
            // Detect if the user is on mobile or desktop
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const whatsappUrl = isMobile 
                ? `https://wa.me/918791881683?text=${encodeURIComponent(message)}`  // Mobile link
                : `https://web.whatsapp.com/send?phone=918791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link
    
            // Open WhatsApp link
            window.open(whatsappUrl, '_blank');
    
            // Show Thank You Modal
            $("#thankYouModal").modal('show');
        });
    });
    
    // Services Whatsapp
    // Book Now Button Click Handler for the second service
    $("#secondService").on("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Define a message for the Book Now button
        const message = "Hello, I am interested in your ring ceremony service.";

        // Detect if the user is on mobile or desktop
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
            ? `https://wa.me/8791881683?text=${encodeURIComponent(message)}`  // Mobile link
            : `https://web.whatsapp.com/send?phone=8791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link

        // Open WhatsApp link
        window.open(whatsappUrl, '_blank');
    });

    // Book Now Button Click Handler for the third service
    $("#thirdService").on("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Define a message for the Book Now button
        const message = "Hello, I am interested in your anniversary service.";

        // Detect if the user is on mobile or desktop
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
            ? `https://wa.me/8791881683?text=${encodeURIComponent(message)}`  // Mobile link
            : `https://web.whatsapp.com/send?phone=8791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link

        // Open WhatsApp link
        window.open(whatsappUrl, '_blank');
    });

    // Book Now Button Click Handler for the fourth service
    $("#fourthService").on("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Define a message for the Book Now button
        const message = "Hello, I am interested in your birthday party service.";

        // Detect if the user is on mobile or desktop
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
            ? `https://wa.me/8791881683?text=${encodeURIComponent(message)}`  // Mobile link
            : `https://web.whatsapp.com/send?phone=8791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link

        // Open WhatsApp link
        window.open(whatsappUrl, '_blank');
    });

    // Book Now Button Click Handler for the fifth service
    $("#fifthService").on("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Define a message for the Book Now button
        const message = "Hello, I am interested in your pool party service.";

        // Detect if the user is on mobile or desktop
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
            ? `https://wa.me/8791881683?text=${encodeURIComponent(message)}`  // Mobile link
            : `https://web.whatsapp.com/send?phone=8791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link

        // Open WhatsApp link
        window.open(whatsappUrl, '_blank');
    });

    // Book Now Button Click Handler for the sixth service
    $("#sixthService").on("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Define a message for the Book Now button
        const message = "Hello, I am interested in your lawn party service.";

        // Detect if the user is on mobile or desktop
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
            ? `https://wa.me/8791881683?text=${encodeURIComponent(message)}`  // Mobile link
            : `https://web.whatsapp.com/send?phone=8791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link

        // Open WhatsApp link
        window.open(whatsappUrl, '_blank');
    });

    // Book Now Button Click Handler for the seventh service
    $("#seventhService").on("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Define a message for the Book Now button
        const message = "Hello, I am interested in your bonfire service.";

        // Detect if the user is on mobile or desktop
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
            ? `https://wa.me/8791881683?text=${encodeURIComponent(message)}`  // Mobile link
            : `https://web.whatsapp.com/send?phone=8791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link

        // Open WhatsApp link
        window.open(whatsappUrl, '_blank');
    });

    // Book Now Button Click Handler for the eighth service
    $("#eighthService").on("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Define a message for the Book Now button
        const message = "Hello, I am interested in your business meeting service.";

        // Detect if the user is on mobile or desktop
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
            ? `https://wa.me/8791881683?text=${encodeURIComponent(message)}`  // Mobile link
            : `https://web.whatsapp.com/send?phone=8791881683&text=${encodeURIComponent(message)}`; // WhatsApp Web link

        // Open WhatsApp link
        window.open(whatsappUrl, '_blank');
    });
    
    
})(jQuery);

