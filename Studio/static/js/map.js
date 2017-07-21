"use strict";

var mapData = config.gmap;


function isMobile() {
    return (/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent));
}



function init() {


    var mapOptions = {
            draggable               : isMobile() ? false : true,
            streetViewControl       : false,
            disableDoubleClickZoom  : true,
            scrollwheel             : false,
            zoom                    : 11,
            center                  : {lat: 59.930976, lng: 30.337829},
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
},

        // Create the Google Map using the map container and options defined above
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        
        var marker = new google.maps.Marker({
            position    : {lat: 59.930976, lng: 30.337829},
            map         : map,
            icon        : mapData.marker
        });


}

/*----------------------------------------------------------------------------*/
/*      When the window has finished loading create your Google Map
/*----------------------------------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', init);