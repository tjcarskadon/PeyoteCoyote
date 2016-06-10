'use strict'

var apoc = require('apoc');

module.exports = (userInput, id) => {

  const { email, isHost } = userInput;

  //create a relationship between the selected roam and the user
  return apoc.query(
    'MATCH (n:User {email: "%email%"}), \
    (m:Roam) WHERE id(m) = %id% \
    CREATE (n)-[:ATTENDING {isHost: %isHost%}]->(m) \
    RETURN m',
    {
      id: id,
      email: email,
      isHost: isHost
    }
  );
};
