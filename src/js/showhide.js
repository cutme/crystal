document.addEventListener('DOMContentLoaded', function() {
    
    const content = document.getElementsByClassName('js-content');
    
    

    const action = function(e) {
        
        const that = e.target,
              content = that.parentNode.parentNode;
                      
            
            content.getElementsByClassName('js-full')[0].classList.remove('is-hidden');
            that.parentNode.classList.add('is-hidden');
    };
    

    const init = function() {                

        for (let i = 0; i < content.length; i ++) {
            
            let btn = content[i].getElementsByClassName('js-btn');

            for (let j = 0; j < btn.length; j ++) {
                btn[j].addEventListener('click', (event) => {
                    event.preventDefault();
                    action(event);
                });
            }            
        }
    };



    content.length > 0 ? init() : false;


}, false);
