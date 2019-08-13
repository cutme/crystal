(function() {
    let scroll_pos = window.pageYOffset || window.scrollY,
        status = false;
    
    const el = document.getElementsByClassName('js-top')[0];
    
    let down;
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
       let st = window.pageYOffset || document.documentElement.scrollTop;
       
       if (st > lastScrollTop){
           down = true;
       } else {
           down = false;
       }

       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    }, false);
    
    const action = function() {
        
        //scroll_pos = window.pageYOffset || window.scrollY;
        
        if (down === true) {
            if (status === false) {
                
                    console.log(down);
                    el.classList.add('is-out');
                    status = true;
            }
        } else {
            if (status === true) {
            
                el.classList.remove('is-out');
                status = false;
            }
        }
    }
    
    el ? window.addEventListener('scroll', action) : false;
    
    
})();