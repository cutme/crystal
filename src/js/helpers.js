import ScrollToPlugin from 'gsap/ScrollToPlugin';
import customSelect from 'custom-select';

(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	customDropdown: customDropdown,
        	isInView: isInView,
        	scrollTo: scrollTo,
        };
    };
    
    const customDropdown = function(lightbox) {

        let cstSel;
        let rows = document.getElementsByClassName('form-row'),
            groups = document.getElementsByClassName('form-group');
            
        if (lightbox) {
            cstSel = customSelect('.glightbox-container select');
        } else {
            cstSel = customSelect('.o-container select');
        }
        
        for (let i = 0; i < cstSel.length; i ++) {
            cstSel[i].container.addEventListener('custom-select:open', (e) => { 
                e.target.parentNode.parentNode.style.zIndex = '10';
                e.target.parentNode.style.zIndex = '10';
            });
            
            cstSel[i].container.addEventListener('custom-select:close', (e) => { 
                    
                for (let j = 0; j < rows.length; j ++) {
                    rows[j].removeAttribute('style');
                }
                
                for (let k = 0; k < groups.length; k ++) {
                    groups[k].removeAttribute('style');
                }
                
            });
        }                   
    };
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
      
    const scrollTo = function (target, speed, offset) {
        
		TweenLite.to(window, speed, {
			scrollTo: {
				y: target - 150,
				autoKill: false
			},
			ease: Power1.easeOut
		});
	};

    cutme.Helpers = new Helpers();
    

}(window, document, window.cutme = window.cutme  || {}));