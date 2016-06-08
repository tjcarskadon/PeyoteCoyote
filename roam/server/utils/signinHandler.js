'use strict'

var apoc = require('apoc');
var bcrypt = require('bcrypt');
var crypto = require('crypto'); //TODO: needed?

module.exports = (data, res) => {
  apoc.query('MATCH \
    (n:User {email: "%email%"}) \
      RETURN n.password',
    {email: data.email}
  )
  .exec().then(function(queryRes){
    if(queryRes[0].data.length === 0) {
      res.send(JSON.stringify({message: 'Incorrect email/password combination!'}));
    } else {
      console.log(queryRes[0].data[0].row[0]);
      bcrypt.compare(data.password, queryRes[0].data[0].row[0], function(err, bcryptRes){
       if(err){
        console.log('error in comparing password:', err);
       }
        if(bcryptRes){
          res.send(JSON.stringify({message: 'Password Match'}));
        } else {
          res.send(JSON.stringify({message: 'Incorrect email/password combination!'}));
        }
      });
    }
  });
}