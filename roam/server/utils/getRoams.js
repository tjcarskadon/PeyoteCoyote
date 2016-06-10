'use strict'

const apoc = require('apoc');

//get list of roams w/in a specified distance
//from the user
module.exports = (userInput) => {

  const { coords, email, dateMS } = userInput;

  return apoc.query('MATCH (m:Roam) \
    WHERE m.creatorRoamEnd > %currentDate% \
      AND m.status = "Pending" \
      AND m.creatorLatitude < %maxLat% \
      AND m.creatorLatitude > %minLat% \
      AND m.creatorLongitude < %maxLong% \
      AND m.creatorLongitude > %minLong% \
      AND m.creatorEmail <> "%email%" \
      RETURN m',
    {
      currentDate: dateMS,
      maxLat: coords.maxLat,
      minLat: coords.minLat,
      maxLong: coords.maxLong,
      minLong: coords.minLong,
      email: email
      // type: type
    }
  );
}

// AND m.type = "%type%" RETURN m
