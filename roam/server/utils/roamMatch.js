'use strict'

const apoc = require('apoc');
const yelp = require('./api');

const getRoams = require('./getRoams');
const startRoam = require('./startRoam');
const joinRoam = require('./joinRoam');

module.exports = (userInput, res) => {

  const { coords, email, dateMS } = userInput;

  getRoams(userInput)
  .exec()
  .then( (roamsList) => {

    //if matches, join nearest match
    console.log('roamsList: ', roamsList[0].data);
    if (!!roamsList[0].data.length) {
      console.log('roams: ', roamsList[0].data[0]);

      let { id } = roamsList[0].data[0].meta[0]
      userInput.isHost = false;

      joinRoam(userInput, id)
      .exec()
      .then( roam => {
        console.log('roam: ', roam);
        res.send("Joined the roam");
      });

    //else, create autoRoam
    } else {
      userInput.isHost = true;

      console.log('roamMatch ln 23');
      let searchParams = {
          term: 'Bars',
          limit: 20,
          sort: 0,
          radius_filter: 3200, //2-mile radius
          bounds:
            coords.maxLat + ',' +
            coords.minLong + '|' +
            coords.minLat  + ',' +
            coords.maxLong
        };

      yelp.searchYelp(searchParams, function(venue) {
        console.log('roamMatch in yelp');
        startRoam(userInput, venue, res);

      });

      console.log('create an auto roam');
    }
  });

}