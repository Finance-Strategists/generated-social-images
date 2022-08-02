require('dotenv').config();

console.log('Password', process.env.PASSWORD);

setTimeout(() => {

  const location = document.getElementById('location').innerHTML
  
  console.log(location);

  document.getElementById("static-map").src = "https://maps.googleapis.com/maps/api/staticmap?center=" + location + "&zoom=14&size=1080x1080&key=YOUR_API_KEY";
}, 5000);