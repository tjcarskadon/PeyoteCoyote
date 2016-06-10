'use strict'

var apoc = require('apoc');
var boundingBoxGenerator = require('./boundingBoxGenerator');
var roamOffGenerator = require('./roamOffGenerator');

const getRoams = require('./getRoams');

module.exports = (query, res) => {

  let userInput = {
    dateMS: Date.now(),
    email: data.userEmail,
    coords: boundingBoxGenerator(data.coordinates),
    times: roamOffGenerator(data),
    type: 'roam', // data.type, //TODO: change 'type' to 'roamMode'
    isHost: false,
    roamId: 46
  };

  console.log('getting all the group roams');


  // apoc.query('MATCH (m:Roam) \
  //     WHERE m.creatorRoamEnd > %currentDate% \
  //       AND m.status = "Pending" \
  //       AND m.creatorLatitude < %maxLat% \
  //       AND m.creatorLatitude > %minLat% \
  //       AND m.creatorLongitude < %maxLong% \
  //       AND m.creatorLongitude > %minLong% \
  //       AND m.creatorEmail <> "%userEmail%" \
  //       AND m.type = "%type%" RETURN m',
  //     {
  //       currentDate: dateMS,
  //       maxLat: coords.maxLat,
  //       minLat: coords.minLat,
  //       maxLong: coords.maxLong,
  //       minLong: coords.minLong,
  //       userEmail: userEmail,
  //       type: type
  // })
  getRoams(userInput)
  .exec()
  .then(function(roamsList) {

    console.log(roamsList[0].data);
    //if there are Pool/X roams, send them
    if (roamsList[0].data.length > 0) {
      res.send(JSON.stringify(roamsList[0].data));
    } else {
      var message = 'No ' + type + ' Roams Available';
      res.send(message);
    }
  });
};
