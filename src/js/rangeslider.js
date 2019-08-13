import rangesliderJs from 'rangeslider-js';

document.addEventListener('DOMContentLoaded', function() {

    window.rangeslider = function() {
    
        const el = document.getElementsByClassName('js-rangeslider');
        
        for (let i = 0; i < el.length; i ++) {
        
            let output,
                unit = el[i].getAttribute('data-unit');

            rangesliderJs.create(el[i], {
                
                onInit: (value, percent, position) => {                    
                    output = el[i].parentNode.getElementsByClassName('rangeslider__handle')[0];
                    output.setAttribute('data-value', value + ' ' + unit);
                },
                
                onSlide: (value, percent, position) => {
                    output.setAttribute('data-value', value + ' ' + unit);
                },
            });
        }        
    };

}, false);
