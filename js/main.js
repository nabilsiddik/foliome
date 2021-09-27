$(document).ready(function(){

    // Sticky Header | for header section
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1) {
            $(".main-header").addClass("sticky-header");
        } else {
            $(".main-header").removeClass("sticky-header");
        }
    });

    // Wow animation | For Full Site
    new WOW().init();

    
    // Custom code for mobile menu slide
    $('.mobile-menu .mobile-menu-icon').click(function(){
        $('.mobile-menu .mobile-side-menu').slideToggle({
        });
    })

    //custome (Hide & Show code) for About filter button
    $('#about_section .filter-btn .contact-filter-btn a').click(function(){
        $('#about_section .personal-and-contact-info .contact-info').show();
    });


    //Counterup for | Counter Section
    $('#counter_section .counter-box .counter-number').counterUp({
        delay: 10,
        time: 700
    });


    // Isotop filter | for portfolio section
    // init Isotope
    var $grid = $('.portfolio-items').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    //remove and add class on click filter button
    $('#portfolio_section .filter-button ul li').click(function(){
        $('#portfolio_section .filter-button ul li').removeClass('active');
        $(this).addClass('active');
    });


    // Team Slider | for Team Section
    $('#team_section .owl-carousel').owlCarousel({
        loop: true,
        margin:10,
        nav:true,
        responsive:{
            0:{
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

    // Magnific popup | For portfolio section
    $('.image-link').magnificPopup({
        type:'image',
        gallery: {
            enabled: true,
          }
    });

    // Testimonial Slider | for Testimonial Section
    $('#testimonial_section .owl-carousel').owlCarousel({
        loop: true,
        margin:10,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            },
            1400:{
                items:3
            }
        }
    })



    // Instafeed For | Instagram Feed Section
    var feed = new Instafeed({
        accessToken: 'IGQVJVbTBNVVpZAUUNDQzZAXZAkhpZAnZAxY0M0R1cwRWxwMzFtd0ZA1Smd6bHlmMHl3aXJCaXp5MkVheXUxRnRVTzVKYzVTTjJWTjEwc0twaHJXc0NQV2xlM0YxcUlRd1dSeXgzOHlrYnZABUU9ZAZA0RTT3lCMwZDZD',
        limit: 6,
        template: '<ul><li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li></ul>'
      });
      feed.run();


      // Scroll to top
      $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('#scroll_top').fadeIn();
        }else{
            $('#scroll_top').fadeOut();
        }
    });



});