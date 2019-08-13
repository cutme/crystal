const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
import Cookies from 'js-cookie';

document.addEventListener('DOMContentLoaded',function() {

    window.showLightbox = function() {
    
        const auto = document.getElementsByClassName('js-onLoad')[0];
        const openLightbox = document.getElementsByClassName('js-openLightbox');
        let showWithPause;
        
        const clickOutside = function(e) {
            let target = e.target;  

            if (target.id === 'overlay') {
                closeLightbox();
            }
        };
        
        const closeLightbox = function() {
            enableBodyScroll(document.getElementById('overlay'));
            
            // back to the roots
            let content = document.getElementById('overlay').getElementsByClassName('js-lightbox')[0];
            document.body.appendChild(content);
            
            document.getElementById('overlay').remove();
            document.removeEventListener('click', clickOutside);
            window.removeEventListener('resize', setHeight);
            
            Cookies.set("atakto-newsletter", 1, { expires: 356, path: '/' });
        };

        const setHeight = function() {
            let windowHeight = window.innerHeight,
                lightboxHeight = document.getElementsByClassName('js-lightbox')[0].clientHeight;
            
            if (lightboxHeight > windowHeight) {
                document.getElementById('overlay').classList.add('to-baseline');
            } else {
                document.getElementById('overlay').classList.remove('to-baseline');
            }
        };

        const loadContent = function(arg) {

            let content = document.getElementById('overlay').getElementsByClassName('js-content')[0];
                
            content.appendChild(arg);
            content.classList.add('is-visible');
            
            setHeight();
            window.addEventListener('resize', setHeight, false);
            disableBodyScroll(document.getElementById('overlay'));
            
            content.getElementsByClassName('js-closelightbox')[0].addEventListener('click', closeLightbox, { once: true });                   
        };

        const pressEsc = function(evt) {
            let isEscape = false;
            
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }

            if (isEscape) {
                closeLightbox();
            }

            document.removeEventListener('keydown', pressEsc);
        };
        
        const overlay = function() {
            let tmp = document.createElement('div');
            tmp.innerHTML = '<div class="o-overlay" id="overlay"><div class="o-overlay__content js-content"><i class="icon-close js-closelightbox"></i></div></div>';

            document.body.appendChild(tmp.firstChild);            
            document.addEventListener('keydown', pressEsc);
            document.addEventListener('click', clickOutside);
        };

        const showLightbox = function(e) {

            overlay();

            setTimeout(function() {
                if (e) {
                    
                    if (e.type === 'click') {
                        let target = e.target.dataset.lightbox;
                        
                        loadContent( document.getElementById( target ) );
                        clearTimeout(showWithPause);
                    } else {
                        loadContent(e);
                    }


                } else {
                    console.log('no event');
                }
            }, 10);
        };

        if (auto) {
            if (Cookies.get('atakto-newsletter') != 1) {
                showWithPause = setTimeout(function() {
                    showLightbox(auto);                
                }, newsletter_time*1000);
            }
        }
    
        
        for( let i = 0; i < openLightbox.length; i ++ ) {

            openLightbox[i].addEventListener('click', (event) => {
                event.preventDefault();
                showLightbox(event);
            });
        }
    };

}, false);