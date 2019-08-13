const loadGoogleMapsApi = require('load-google-maps-api');

document.addEventListener('DOMContentLoaded', function() {
    
    const obj = document.getElementsByClassName('js-map')[0];
    
    let mapenable = false, int;

    const initMap = function() {
        loadGoogleMapsApi({
            key: 'AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY'
            }).then(function (googleMaps) {
            
            const el = document.querySelector('.js-map'),
                  lat = Number(el.getAttribute('data-lat')),
                  lng = Number(el.getAttribute('data-lng')),
                  myLatLng = new google.maps.LatLng(lat, lng);
/*
                  markerWidth = 56,
                  markerHeight = 75;
*/
        
            const map = new googleMaps.Map(el, {
                center: myLatLng,
                disableDefaultUI: true,
                zoom: 17
            })
            
            const marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
              });
            
            /*
const image = {
				url: el.getAttribute('data-marker'),
				size: new google.maps.Size(markerWidth, markerHeight),
				scaledSize: new google.maps.Size(markerWidth, markerHeight),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(markerWidth/2, markerHeight),
				labelOrigin: new google.maps.Point(0, markerHeight)
			}
*/
			
/*
			const marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				draggable: false,
				zIndex: 20,
				animation: google.maps.Animation.DROP,				
			});
*/
            
        
        }).catch(function (error) {
            console.error(error)
        })
    };

    const init = function() {
    
        // Fire when show in viewport 
        
              
        
        clearInterval(int); // for better performance
    
        int = setInterval(function() {
            let bottomOfObject = obj.getBoundingClientRect().top + 200,
            bottomOfWindow = window.innerHeight;
            
            
    
            if ( bottomOfWindow > bottomOfObject ) {
                if (mapenable === false) {
                    initMap();
                    console.log('fire map');
                    mapenable = true;
                }
        	}

        }, 50);        
    }
    
    
    
    if (obj) {
        if (cutme.Helpers.isInView(obj)) {
            if (mapenable === false) {
                obj.classList.add('anim--visible');
                
                initMap();
                console.log('fire map');
                mapenable = true;
            }
            
        } else {
            window.addEventListener('scroll', init);
        }
    } 
    
}, false);


