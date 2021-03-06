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
              li = nav.getElementsByTagName('li'),
              submenus = nav.getElementsByClassName('js-submenu');
        
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

        const submenu = function(e) {

            if (ww <= 1024) {
                let item = e.currentTarget,
                    submenu = item.getElementsByClassName('js-submenu');

                e.stopPropagation();

                if (submenu.length > 0) {

                    if (submenu[0].classList.contains('is-active')) {
                        submenu[0].classList.remove('is-active');
                    } else {
                    
                        for (let k = 0; k < submenus.length; k ++) {
                            submenus[k].classList.remove('is-active');
                        }

                        submenu[0].classList.add('is-active');
                    }

                } else {
                    let url = item.getElementsByTagName('a')[0].getAttribute('href');
                    window.open(url, '_self');
                }

                e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            }
        }

        for (let j = 0; j < li.length; j++) {
            li[j].addEventListener('click', submenu);
        }

        el.addEventListener('click', showMenu);
     
     
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
