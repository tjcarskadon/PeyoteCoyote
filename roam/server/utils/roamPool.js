var apoc = require('apoc');

const startRoam = require('./startRoam');
const joinRoam = require('./joinRoam');

//connect user to roam or create specified roam
module.exports = (userInput, res) => {

  // const {
  //   title,
  //   email,
  //   coords,
  //   times,
  //   isHost,
  //   roamId
  // } = userInput;\

  const { isHost } = userInput;

  //TODO: necessary?
  //const venue = {} = userInput ?
  const { locName, address } = userInput;

  if (isHost) {
    startRoam(
      userInput,
      { locName, address },
      res
    );

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
