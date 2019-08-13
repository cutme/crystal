const { detect } = require('detect-browser');
const browser = detect();

document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    if (browser) {
        document.documentElement.classList.add(browser.name);
    }
    
    window.onload = function() {
    
        // Start
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        cover.addEventListener("transitionend", function() {
            cover.remove();
        }, false);
        
        // Anims on inview
        window.animsInit();
        
    };

}, false);