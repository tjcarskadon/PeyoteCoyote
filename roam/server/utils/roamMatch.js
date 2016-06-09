'use strict'

const apoc = require('apoc');

const getRoams = require('./getRoams');
const startRoam = require('./startRoam');

module.exports = (userInput, res) => {

  const { coords, email, dateMS } = userInput;
  //FILE:
  //match user w/ an existing roam
  // apoc.query('MATCH (m:Roam) \
  //     WHERE m.creatorRoamEnd > %currentDate% \
  //       AND m.status = "Pending" \
  //       AND m.creatorLatitude < %maxLat% \
  //       AND m.creatorLatitude > %minLat% \
  //       AND m.creatorLongitude < %maxLong% \
  //       AND m.creatorLongitude > %minLong% \
  //       AND m.creatorEmail <> "%email%" \
  //       AND m.type = "%type%" RETURN m',
  //     {
  //       currentDate: dateMS,
  //       maxLat: coords.maxLat,
  //       minLat: coords.minLat,
  //       maxLong: coords.maxLong,
  //       minLong: coords.minLong,
  //       email: email
  //       // type: type
  //     })
  getRoams(userInput, res)
  .exec().then( (roamsList) => {
    //if matches, join nearest match
      console.log('roamsList: ', roamsList);
    if (!!roamsList[0].data.length) {
      console.log('join a roam');
      //join match w/ least distance

    //else, create autoRoam
    } else {
      console.log('create an auto roam');
      startRoam(userInput, res);
    }
  });

}