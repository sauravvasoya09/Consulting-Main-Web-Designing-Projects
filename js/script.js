$(document).ready(function(){
     

     $('.main-menu > li > a').click(function(){

          $('.main-menu').fild('li a').removeClass('active');
          $(this).addClass('active');

     })

     $('.tablate-menu').hide();
     $('.tablate-sub-menu1').hide();
     $('.tablate-sub-menu2').hide();
     
     $('.menu-open').click(function(){
          $('.tablate-menu').slideToggle();
          $('.menu-open').toggleClass('fa-times fa bars');
     })

     $('.plus-icon1').click(function(){

          $('.tablate-sub-menu1').slideToggle();
          $('.plus-icon1').toggleClass('fa-times fa bars');

     });

     $('.plus-icon2').click(function(){

          $('.tablate-sub-menu2').slideToggle();
          $('.plus-icon2').toggleClass('fa-times fa bars');

     });
     

                    $('#main-slider').owlCarousel({
                         loop:true,
                         margin:10,
                         nav:true,
                         dots:false,
                         smartSpeed:5,
                         responsive:{
                              0:{
                                   items:1,
                                   nav:true
                               },
                               600:{
                                   items:1,
                                   nav:false
                               },
                               1000:{
                                   items:1,
                                   nav:true,
                                   loop:true
                              }
                         }
                    })

                    var owl = $('#main-slider');
                    owl.owlCarousel();
                    // Listen to owl events:
                    owl.on('changed.owl.carousel', function(event) {
                         new WOW().init();
                    })

               wow = new WOW(
               {
                    boxClass:     'wow',      // default
                    animateClass: 'animated', // default
                    offset:       0,          // default
                    mobile:       true,       // default
                    live:         true        // default
               }
               )
               wow.init();


               $('#complated-slider').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    dots:false,
                    autoplay: true,
                    smartSpeed:5,
                    responsive:{
                         0:{
                              items:1,
                              nav:false
                         },
                         768:{
                              items:2,
                              nav:false
                         },
                         1000:{
                              items:2,
                              nav:false,
                              loop:true
                         },
                         1440:{
                              items:3,
                              nav:false,
                              loop:true
                         }
                    }
               })

               $('#testimonials-slider').owlCarousel({
                    loop: true,
                    center: true,
                    items: 3,
                    margin: 0,
                    autoplay: false,
                    dots:false,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive:{
                                   0:{
                                       items:1,
                                       nav:true
                                   },
                                   600:{
                                       items:1,
                                       nav:true
                                   },
                                   1000:{
                                       items:1,
                                       nav:true,
                                       loop:true
                                   }
                               }  
                         });

});