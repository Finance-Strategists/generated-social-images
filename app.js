const config = require('./config.json');

const API_Key = config.API_KEY;

global.changeMap = function () {

  const location = document.getElementById('location').innerHTML

  console.log(location);

  document.getElementById("static-map").src = "https://maps.googleapis.com/maps/api/staticmap?center=" + location + "&zoom=10&size=1080x1080&key=" + API_Key;

};