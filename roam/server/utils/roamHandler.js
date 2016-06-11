'use strict'

var apoc = require('apoc');
var formattedDateHtml = require('./dateFormatter');
var generateEmail = require('./emailGenerator');

var boundingBoxGenerator = require('./boundingBoxGenerator');
var roamOffGenerator = require('./roamOffGenerator');

const roamMatch = require('./roamMatch');
const roamPool = require('./roamPool');

module.exports = (data, res) => {
<<<<<<< 30139470a2cf9b012734e496396c767f995f69a8
  // console.log('data: ', data);

  data.coords = boundingBoxGenerator(data.latitude, data.longitude)

  console.log('data.type: ', data.type);
  if (data.type === 'roam') {
=======
// console.log(data,'&&&&&&&&&&&&&&');
  //TODO: use destructor
  let userInput = {
    dateMS: Date.now(),
    email: data.userEmail,
    coords: boundingBoxGenerator(data.coordinates),
    times: roamOffGenerator(data),
    type: 'roam', // data.type, //TODO: change 'type' to 'roamMode'
    isHost: false,
    roamId: 46
  };

  if (userInput.type === 'roam') {
>>>>>>> FEAT - complete google places implementation
    //match user w/ a roam or create an auto roam
    roamMatch(data, res);

  } else {

    //connect user to roam or create specified roam
    roamPool(data, res);
  }
}
