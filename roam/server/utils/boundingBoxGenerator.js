//This file takes the user coordinates and generates a boundary within which
//we want to find another match and also find a meeting venue

module.exports = function(latitude, longitude) {

  const offsetToDegrees = 0.02;

  var dateMS = Date.now();
  var userLat = Number(latitude);
  var userLng = Number(longitude);

  var maxLat = userLat + offsetToDegrees;
  var minLat = userLat - offsetToDegrees;
  var maxLong = userLng + offsetToDegrees;
  var minLong = userLng - offsetToDegrees;

  return ({userLat, userLng, maxLat, minLat, maxLong, minLong});
}