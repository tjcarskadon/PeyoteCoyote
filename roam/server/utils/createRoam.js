var apoc = require('apoc');

var roamOffGenerator = require('./roamOffGenerator');

//creates a roam node
module.exports = (userInput, venue, res) => {

  const {
    userEmail,
    title,
    capacity,
    description,
    latitude,
    longitude,
    date,
    time,
    isHost,
    type,
    // price
  } = userInput;

  const { locName, address } = venue;

  const endTime =
  roamOffGenerator({ date, time });

  console.log('endTime: ', endTime);

  //TODO: use roam positions instead of creator positions

  return apoc.query(
    'CREATE \
      (m:Roam { \
        creatorEmail: "%email%", \
        creatorLatitude: %latitude%, \
        creatorLongitude: %longitude%, \
        creatorRoamStart: %startTime%, \
        creatorRoamEnd: %endTime%,\
        status: "Pending", \
        venueName: "%venueName%", \
        venueAddress: "%venueAddress%", \
        type: "%type%", \
        isHost: %isHost%, \
        title: "%title%", \
        description: "%description%" \
      }) \
      RETURN m',
      {
        email: userEmail,
        latitude: latitude,
        longitude: longitude,
        startTime: date,
        endTime: endTime,
        venueName: locName,
        venueAddress: address,
        type,
        isHost,
        title,
        description
        // price
    });
}
