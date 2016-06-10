var apoc = require('apoc');
var yelp = require('./api');

const createRoam = require('./createRoam');
const joinRoam = require('./joinRoam');


module.exports = (userInput, venue, res) => {

  console.log('startRoam');
  //create a roam (node)
  createRoam(userInput, venue, res)
  .exec()
  .then(function(queryRes) {

    let { id } = queryRes[0].data[0].meta[0];
    console.log('meta: ', queryRes[0].data[0].meta[0])
;    console.log('id: ', id);
    //join (relationship) user (node) to just created roam (node)
    joinRoam(userInput, id)
    .exec()
    .then( (roam) => {
      console.log('roam: ', roam);
      res.send("Joined the roam");
    });
  });
}
