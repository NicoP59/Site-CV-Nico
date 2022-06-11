//______________________________________________________________________________
// Lien google de l'api
// https://console.developers.google.com/apis/credentials?project=api-iss-296418
//_______________________________________________________________________________

var actu = document.getElementById('actu')
let map;

function position(){


    var latitude = 50.367874;
    var longitude = 3.080602;

    const myLatLng = { lat: Number(latitude), lng: Number(longitude) };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "J'habite ici ! ",
    });
      
}

position()
