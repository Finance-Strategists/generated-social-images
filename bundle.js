(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
const config = require('./config.json');

const API_Key = config.API_KEY;

global.changeMap = function () {

  const location = document.getElementById('location').innerHTML

  console.log(location);

  document.getElementById("static-map").src = "https://maps.googleapis.com/maps/api/staticmap?center=" + location + "&zoom=10&size=1080x1080&key=" + API_Key;

};
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./config.json":2}],2:[function(require,module,exports){
module.exports={
  "API_KEY": "AIzaSyCdfub_NTXhFKu8YHjov_Xynxb2w_RZCGg"
}

},{}]},{},[1]);
