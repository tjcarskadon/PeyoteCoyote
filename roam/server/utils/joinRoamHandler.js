'use strict'

var apoc = require('apoc');

module.exports = (req, res) => {
  let id = req.body.id;
  let userEmail = req.body.userEmail;
  let type = req.body.type;
  //create a relationship between the selected roam and the user
  apoc.query('MATCH (n:User {email: "%email%"}), (m:Roam) \
      WHERE id(m) = %id% \
      CREATE (n)-[r:ATTENDING {host: false}]->(m) \
      RETURN m',
      {
        id: id,
        email: userEmail
  })
  .exec().then(function(roam){
    res.send("Joined the roam");
  })
};