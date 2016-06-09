'use strict'

var apoc = require('apoc');
var formattedDateHtml = require('./dateFormatter');
var generateEmail = require('./emailGenerator');

var boundingBoxGenerator = require('./boundingBoxGenerator');
var roamOffGenerator = require('./roamOffGenerator');

const roamMatch = require('./roamMatch');
const roamPool = require('./roamPool');

module.exports = (data, res) => {

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
    //match user w/ a roam or create an auto roam
    roamMatch(userInput, res);
  } else {
    //connect user to roam or create specified roam
    roamPool(userInput, res);
  }
}

