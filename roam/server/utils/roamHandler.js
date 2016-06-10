'use strict'

var apoc = require('apoc');
var formattedDateHtml = require('./dateFormatter');
var generateEmail = require('./emailGenerator');

var boundingBoxGenerator = require('./boundingBoxGenerator');
var roamOffGenerator = require('./roamOffGenerator');

const roamMatch = require('./roamMatch');
const roamPool = require('./roamPool');

module.exports = (data, res) => {
  let userInput;
console.log('data: ', data);
  //TODO: use destructor
  // let userInput = {
  //   dateMS: Date.now(),
  //   email: data.userEmail,
  //   coords: boundingBoxGenerator(data.coordinates),
  //   times: roamOffGenerator(data),
  //   type: 'roam', // data.type, //TODO: change 'type' to 'roamMode'
  //   isHost: false,
  //   roamId: 46
  // };
  const { latitude, longitude } = data;
  data.coords = boundingBoxGenerator(latitude, longitude)

  console.log('data.type: ', data.type);
  if (data.type === 'roam') {
    // userInput = {
    //   userEmail,
    //   latitude,
    //   type,
    //   time //?
    // } = data;

    //match user w/ a roam or create an auto roam
    roamMatch(data, res);

  } else {
    // userInput = {
    //   userEmail,
    //   title,
    //   capacity,
    //   description,
    //   latitude,
    //   longitude,
    //   date,
    //   isHost,
    //   type
    // // price
    // } = data;

    //connect user to roam or create specified roam
    roamPool(data, res);
  }
}
