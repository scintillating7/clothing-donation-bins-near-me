function initMap() {
    var myLatLng = {lat: 41.8050512, lng: -87.5977629};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'TestBox1',
        label: 'TestBox1'
    });
}