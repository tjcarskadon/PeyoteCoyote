'use strict'

var apoc = require('apoc');

module.exports = (userInput, eventId) => {

  const { userEmail, isHost } = userInput;

  //create a relationship between the selected roam and the user
  return apoc.query(
    'MATCH (n:User {email: "%email%"}), \
    (m:Roam) WHERE id(m) = %eventId% \
    CREATE (n)-[:ATTENDING {isHost: %isHost%}]->(m) \
    RETURN m',
    {
      eventId: eventId,
      email: userEmail,
      isHost: isHost
    }
  );
};
