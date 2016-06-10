// roamOffGenerator.js
//

module.exports = function(data) {

  // var startRoam = Number(data.coordinates.timestamp); //time when user clicks the roam button in milliseconds
  // var roamOffAfter = Number(startRoam); //time when the user is not available after in milliseconds


  if(data.time === '1 hour') {
    return data.date +=   3600000;
  }

  if(data.time === '2 hours') {
    return data.date +=   7200000;
  }

  if(data.time === '4 hours') {
    return data.date +=   14400000;
  }

  if(data.time === 'Anytime today') {
    var today = new Date();
    var millisecondsUntilMidnight = (24 - today.getHours()) * 3600000;


    return data.date +=   millisecondsUntilMidnight;
  }
}

