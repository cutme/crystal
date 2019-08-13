/*
 * Animations that display numerical data (https://inorganik.github.io/countUp.js/)
 * with InView detection (https://github.com/miguelmota/inview)
 *
 * Usage:
 * <span class="js-count" data-count="500">&nbsp;</span>
 */

import { CountUp } from 'countup.js';
import InView from 'inview';

document.addEventListener('DOMContentLoaded', function() {

    const count = document.getElementsByClassName('js-count');
    
    const init = function() {
        
        const options = {
            duration: 4,
        };
        
        for (let i = 0; i < count.length; i++) {
            const inview = InView(count[i], function(isInView) {
                if (isInView) {
    
                    let demo = new CountUp(count[i], count[i].getAttribute('data-count'), options);
        	    
            	    if (!demo.error) {
                        demo.start();
                    } else {
                        console.error(demo.error);
                    }
                    
                    this.destroy();
    
                }
            });
        }
    };

    count.length>0 ? init() : false;

}, false);