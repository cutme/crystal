import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const home = document.getElementById('homeCarousel'),
          references = document.getElementById('references');

    const homeCarousel = function() {

        const glide = new Glide(home, {
            type: 'carousel',
            animationDuration: 1200,
            autoplay: 4500,
            hoverpause: true,
            gap: 0
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
    };
    
    const referencesCarousel = function() {

        const glide = new Glide(references, {
            type: 'carousel',
            animationDuration: 1000,
            autoplay: 4500,
            hoverpause: true,
            gap: 0
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
    };


    home ? homeCarousel() : false;
    references ? referencesCarousel() : false;

}, false);