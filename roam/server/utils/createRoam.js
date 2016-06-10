var apoc = require('apoc');

//creates a roam node
module.exports = (userInput, venue, res) => {

  const {
    // type,
    // date,
    times,
    coords,
    email,
    isHost,
    // attending,
    // title,
    // description,
    // cost
  } = userInput;

  const { venueName, venueAddress } = venue;

  //TODO: use roam positions instead of creator positions

  return apoc.query('CREATE \
      (m:Roam { \
        creatorEmail: "%email%", \
        creatorLatitude: %userLatitude%, \
        creatorLongitude: %userLongitude%, \
        creatorRoamStart: %startRoam%, \
        creatorRoamEnd: %roamOffAfter%, \
        status: "Pending", \
        venueName: "%venueName%", \
        venueAddress: "%venueAddress%", \
        attending: %attending%, \
        type: "%type%", \
        date: "%date%"\
        isHost: %isHost%, \
        title: "%title%", \
        description: "%description%", \
        cost: %cost% \
      }) \
      RETURN m',
      {
        email: email,
        userLatitude: coords.userLatitude,
        userLongitude: coords.userLongitude,
        startRoam: times.startRoam,
        roamOffAfter: times.roamOffAfter,
        venueName: venueName,
        venueAddress: venueAddress,
        attending: [email]
        // type,
        // date,
        // isHost,
        // title,
        // description,
        // cost
    });
}
