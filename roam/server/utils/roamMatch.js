'use strict'

const apoc = require('apoc');

const getRoams = require('./getRoams');
const startRoam = require('./startRoam');

module.exports = (userInput, res) => {

  const { coords, email, dateMS } = userInput;

  getRoams(userInput, res)
  .exec().then( (roamsList) => {
    //if matches, join nearest match
      console.log('roamsList: ', roamsList);
    if (!!roamsList[0].data.length) {
      console.log('join a roam');
      //join match w/ least distance

    //else, create autoRoam
    } else {

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

        startRoam(userInput, venue, res);

      });

      console.log('create an auto roam');
    }
  });

}