// Bars
const selectElement = ( (element)=> {
   return document.querySelector(element);
});

let menuToggler = selectElement('.menu-toggle');
let nav = selectElement('.nav-bar');

menuToggler.addEventListener('click', () => {
   nav.classList.toggle('open');
});



// Carousel
   $('.owl-carousel').owlCarousel({
      lazyLoad: true,
      autoplay: true,
      items: 4,
      loop: true,
      mouseover: true,
      resposiveClass: true,
      respinsiveRefreshRate: 10,
      autoplayHoverPause: true,
      responsive: {
         0 : {
            items: 1
         },
         485 : {
            items: 2
         },
         830 : {
            items : 3
         },
         1444 : {
            items : 4
         },
         1920 : {
            items: 4
         }
      }
   });
   

   $("#meSelf").owlCarousel({
   items: 4,
   autoplay: true,
   loop: true,
   responsive: {
      0 : {
         items: 1
      },
      485 : {
         items: 2
      },
      830 : {
         items : 4
      },
      1444 : {
         items : 4
      },
      1920 : {
         items: 4
      }
   }
   })

   $('.carousel').carousel({
      interval: false,
      pause: "hover"
   });

// LoadMore Js
$(document).ready( () => {
   $('.moreBox').slice(0, 3).show();
      if ($('.blogBox:hidden').length != 0) {
         $('#loadMore').show();
      }
   $('#loadMore').on('click', ((e)=>{
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 3).slideDown();
      if ($('.morebox:hidden').length == 0) {
         $('.loadMore').fadeOut('slow');
      }
   }))
});
