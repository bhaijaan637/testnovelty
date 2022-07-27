// owl js
 $(document).ready(function() {

  // OwlCarousel
jQuery(document).ready(function($) {
    if ($('.client-carousel').length > 0) {
      $('.client-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        margin:50,
        smartSpeed: 1500,
        merge: true,
        nav: false,
        navText: [],
        responsive: {
          0: {
            items: 1
          },
          420: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 3
          },
          1024: {
            items: 3
          }
        }
      });
    }
  });
// owlCarouse end


  // 2 owl
   $('.floor-carousel').owlCarousel({
      loop:true,
      items: 3,
      margin:8,
      nav:true,
      dots:true,
      loop: true,
      autoplay:true,
      lazyLoad: true,
      responsive: {
          0: {
            items: 1
          },
          420: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 2
          },
          1024: {
            items: 3
          }
        }
  });
});

 // $(document).ready(function() {
        // Transition effect for navbar 
        // $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
        //   if($(this).scrollTop() > 300) { 
        //       $('.navbar').addClass('solid');
        //       $('.navbar-brand .logo').addClass('scroll-logo');

        //   } else {
        //       $('.navbar').removeClass('solid');
        //       $('.navbar-brand .logo').removeClass('scroll-logo');
        //   }
        // });

        // $(window).width(function(){
        //   if ($(window).outerWidth() >= 991) {
           // $('.feed-section .col-lg-3').addClass('feed-w');
          // }
          // else{
            // $('.feed-section .col-lg-3').removeClass('feed-w');
//           }
//         });   
// });

  window.onscroll = () =>{

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }
}

 function myFunction(x) {
    x.classList.toggle("change");
  }
 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
