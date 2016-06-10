var apoc = require('apoc');

const startRoam = require('./startRoam');
const joinRoam = require('./joinRoam');

//connect user to roam or create specified roam
module.exports = (userInput, res) => {
  const { dateMS,
    email,
    coords,
    times,
    isHost,
    roamId
  } = userInput;

  if (isHost) {
    //NOTE: need to serve the geo info for venue
    //venue: {name: location.name, address: location.address}
    startRoam(userInput, venue, res);

  } else {
    //join specified roam

    //NOTE: need to serve joinRoam the id
    //of the specified roam node
    joinRoam(userInput, roamId)
    .exec()
    .then( (roam) => {
      console.log('roam: ', roam);
      res.send("Joined the roam");
    });
  }
}
