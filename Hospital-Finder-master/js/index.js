document.addEventListener("DOMContentLoaded", () => {
  let myForm = document.querySelector("form");

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelector("#map").scrollIntoView({
      behavior: "smooth"
    });

    myForm.reset();
  });
});


// Mapbox token removed for GitHub security
mapboxgl.accessToken = "";


navigator.geolocation.getCurrentPosition(
  successLocation,
  errorLocation,
  {
    enableHighAccuracy: true
  }
);


function successLocation(position) {
  console.log(position);

  setUpMap([
    position.coords.longitude,
    position.coords.latitude
  ]);
}


function errorLocation() {

  // Default location: Pune
  setUpMap([
    73.854777,
    18.521826
  ]);

}


function setUpMap(center) {

  const map = new mapboxgl.Map({

    container: "map",

    style:
      "mapbox://styles/esthercatev/cl29khs4v000514ms5eiyerq3",

    center: center,

    zoom: 15

  });


  // Direction plugin
  map.addControl(

    new MapboxDirections({

      accessToken: mapboxgl.accessToken

    }),

    "top-left"

  );


  // Zoom and rotation controls
  map.addControl(
    new mapboxgl.NavigationControl()
  );

}