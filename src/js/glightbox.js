import GLightbox from '../../node_modules/glightbox/dist/js/glightbox.js';
require('../../node_modules/glightbox/dist/css/glightbox.css');

document.addEventListener('DOMContentLoaded', function() {
    
    
    if (document.getElementsByClassName('js-image').length > 0) {
    
        let image = GLightbox({
            selector: 'js-image',
        });
    }
    
    if (document.getElementsByClassName('js-video').length > 0) {
        const video = GLightbox({
            selector: 'js-video',
            youtube: {
                api: "https://www.youtube.com/iframe_api",
                params: {
                    enablejsapi: 1,
                    showinfo: 0,
                    modestbranding: 1,
                    controls: 0
                }
            }
        });
    }

}, false);
