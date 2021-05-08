// Bars
const selectElement = ( (element)=> {
   return document.querySelector(element);
});

let menuToggler = selectElement('.menu-toggle');
let nav = selectElement('.nav-bar');

menuToggler.addEventListener('click', () => {
   nav.classList.toggle('open');
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

   $("#borderSlide").owlCarousel({
      items: 4,
      autoplay: true,
      loop: true,
      responsive: {
         0 : {
            items: 1
         },
         485 : {
            items: 1
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

      // $('.carousel').carousel({
      //    interval: 4000,
      //    pause: "hover"
      // });
   

      // Button
      filterSelection('all') // Execute the func
      function filterSelection (c) {
   var x, i;
   x = document.getElementsByClassName('element-item');
   if (c == 'all') c = '';
   // Add the "show" class (display: block) to the fitered elements, and remove the "show" class from te element that are not selected
   for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1)
      w3AddClass(x[i], "show");
   }
}

// Show Filterd Elements

function w3AddClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(' ');
   arr2 = name.split(' ');
   for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
         element.className += " " + arr2[i];
      }
   }
}

// Hide Elements that are not selected
function w3RemoveClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(' ');
   arr2 = name.split(' ')
   for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
   }
   element.className = arr1.join(' ')
}

// Add Active class to the current bottom

var btnContainer = document.getElementById('groupBtn');
var btns = document.getElementsByClassName('btn');
for ( var i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', function(){
      var current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace('active', '');
      this.className += " active"
   });
}

$('.test-popup-link').magnificPopup({
   type: 'image'
   // other options
});