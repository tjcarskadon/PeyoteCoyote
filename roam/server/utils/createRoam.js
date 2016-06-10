var apoc = require('apoc');

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
    isHost,
    type
    // price
  } = userInput;

  const { locName, address } = venue;

  //TODO: use roam positions instead of creator positions

  return apoc.query('CREATE \
      (m:Roam { \
        creatorEmail: "%email%", \
        creatorLatitude: %latitude%, \
        creatorLongitude: %longitude%, \
        creatorRoamStart: %startTime%, \
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
        venueName: locName,
        venueAddress: address,
        type,
        isHost,
        title,
        description
        // price
    });
}
