import InView from 'inview';

document.addEventListener('DOMContentLoaded',function() {
            
    const anims = document.getElementsByClassName('anim'),
          waypoints = document.getElementsByClassName('js-waypoint');
    
    window.animsInit = function() {        

        for (let i = 0; i < anims.length; i++) {

            if (cutme.Helpers.isInView(anims[i])) {
                anims[i].classList.add('anim--visible');
            }

            const inview = InView(anims[i], function(isInView, data) {
                if (isInView) {
                    if (data.elementOffsetTopInViewHeight < data.inViewHeight/2) {
                        anims[i].classList.add('anim--visible');
                        this.destroy();
                    }
                }
            });
        }
    };

}, false);
