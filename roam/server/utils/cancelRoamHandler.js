'use strict'

var apoc = require('apoc');


module.exports = (req, res, transporter) => {
  var userEmail = req.body.userEmail;
  console.log('useremail is:', userEmail);

  //Finds roam node that user created and cancels it
  apoc.query('MATCH \
      (m:Roam {creatorEmail: "%userEmail%"}) \
      WHERE m.status="Pending" \
      SET m.status="Canceled" \
      RETURN m',
      {userEmail: userEmail}
    )
    .exec().then(function(cancelRes) {

      console.log('Roam canceled:', cancelRes[0].data[0].row[0]);

      var roamInfo = cancelRes[0].data[0].row[0];

      //Sends cancellation email
      var mailOptions = {
        from: '"Roam" <Roamincenterprises@gmail.com>', // sender address
        bcc: roamInfo.creatorEmail + ',' + userEmail,
        subject: 'Your Roam has been canceled!', // Subject line
        text: 'Your Roam at:' + roamInfo.venueName + ' Roam Address: ' + roamInfo.venueAddress + ' has been canceled.', // plaintext body
        html:
        '<div> \
          <h3>Roam Venue: <br>'
            + roamInfo.venueName +
          '</h3> \
        </div> \
        <div> \
          <h3>Roam Address: '
            + roamInfo.venueAddress + ' has been canceled. \
          </h3> \
        </div>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
          return console.log(error);
        }
        console.log('Message sent: ' + info.response);
      });

      res.send("Your Roam has been canceled");
  });
}