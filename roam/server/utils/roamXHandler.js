'use strict'

var https = require('https');
var apoc = require('apoc');
var proof = require('./apiKeys').appSecret;
var crypto = require('crypto');

module.exports = (data, res) => {

  //create the secret_proof
  var hmac = crypto.createHmac('sha256', proof);
  hmac.update(data.headers.authorization);
  var appProof = hmac.digest('hex');

  //query the database to get all other users that logged in with facebook
  apoc.query('MATCH \
    (n:User) \
      WHERE n.email <> "%email%" \
        AND n.facebook=true \
      RETURN n',
    {email: data.query.email}
  )
  .exec().then(users => {
    var usersList = [];
    var count = 0;
    
    //for each user, see if they have mutual friends
    users[0].data.forEach((user) => {
      //generate the url for GET request
      var url = 'https://graph.facebook.com/v2.6/' + user.row[0].facebookID
        + '?fields=context.fields(all_mutual_friends)&access_token='
        + data.headers.authorization + '&appsecret_proof=' + appProof;

      //send get request to Facebook graph api
      https.get(url, response => {
          var results = '';
          response.on('data', chunk => {
            results += chunk;
          });
          response.on('end', () => {
            results = JSON.parse(results);
            //if there are no mutual friends, add the userid to the list of allowed users
            if (results.context.all_mutual_friends.summary.total_count === 0) {
              usersList.push(results.id);
            }
            count ++;
            //once all users have been checked, send the allowed list back to client
            if (count === users[0].data.length) {
              apoc.query('MATCH (n:User) \
                WHERE n.facebookID IN %array% \
                RETURN n',
                {
                  array: usersList
                })
                .exec().then(function(roams) {
                  res.send(JSON.stringify(roams[0].data));
                  });
              // res.send(JSON.stringify(usersList));
            }
          })
        })
        .on('error', (e) => {
          console.log('this is ERROR!', e);
        })
    });

  });
}