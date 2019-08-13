const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
import ScrollToPlugin from 'gsap/ScrollToPlugin';
const plugins = [ ScrollToPlugin ];

document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.getElementsByClassName('js-hamburger')[0];
    
    const init = function() {
    
        let ww = window.innerWidth;
                
        const checkWindowWidth = function() {
            ww = window.innerWidth;
            
            if (ww > 1024) {
                hideMenu();
            }
        };
    
        const nav = document.getElementsByClassName('js-nav')[0],
              li = nav.getElementsByTagName('li');
        
        const hideMenu = function() {
            
            enableBodyScroll(nav);
            nav.classList.remove('is-visible');
            el.classList.remove('is-active');
        };
    
        const showMenu = function(e) {  

            // Menu is open
            if (e.currentTarget.classList.contains('is-active')) {
                
                hideMenu();
                
            } else {
                
                disableBodyScroll(nav);

                nav.classList.add('is-visible');
                el.classList.add('is-active');
            }

            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }

        el.addEventListener('click', showMenu);
     
        const menu = function(e) {

            if (ww <= 768) {
                let item = e.currentTarget,
                    link = item.getElementsByClassName('js-goto');

                e.stopPropagation();

                if (link.length > 0) {

                    hideMenu();

                } else {
                    let url = item.getElementsByTagName('a')[0].getAttribute('href');
                    window.open(url, '_self');
                }

                e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            }
        }
     
        for (let j = 0; j < li.length; j++) {
            li[j].addEventListener('click', menu);
        }

        // Hide menu on ESC
        
        document.addEventListener('keydown', function(evt) {
           // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideMenu();
            }
        });
       
        window.addEventListener('resize', checkWindowWidth);
        
        checkWindowWidth();
    }
    
    el ? init() : false;
    
    
    
}, false);
