var apoc = require('apoc');
var yelp = require('./api');

const createRoam = require('./createRoam');
const joinRoam = require('./joinRoam');


module.exports = (userInput, venue, res) => {

  const { coords, email, times , type } = userInput;

  const roamVenue = {
    venueName: venue.name,
    venueAddress: venue.location.display_address.join(' ')
  }

  console.log('startRoam');
  //create a roam (node)
  createRoam(userInput, roamVenue, res)
  .exec()
  .then(function(queryRes) {

    let { id } = queryRes[0].data[0].meta[0];
    //join (relationship) user (node) to just created roam (node)
    joinRoam(userInput, id, res)
    .exec()
    .then( (roam) => {
      console.log('roam: ', roam);
      res.send("Joined the roam");
    });

    });
}
