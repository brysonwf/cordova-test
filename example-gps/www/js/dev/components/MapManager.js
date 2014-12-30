var MapManager = {
    init: function(){
        var map;

        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        //
        var onSuccess = function(position) {
            var mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            };
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);


        google.maps.event.addDomListener(window, 'load', initialize);
    }
}
