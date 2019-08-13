import ScrollToPlugin from 'gsap/ScrollToPlugin';

document.addEventListener('DOMContentLoaded',function() {

    const gotop = document.getElementsByClassName('js-gotop')[0];

   
    const init = function() {


       // Fire action

       const scrollUp = function(e) {
           cutme.Helpers.scrollTo(0, 1, 0);
           e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
       }

       gotop.addEventListener('click', scrollUp);

	};



    gotop ? init() : false;
    
    
}, false);
