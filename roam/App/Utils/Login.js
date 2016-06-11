const FBSDK = require('react-native-fbsdk');
const {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

module.exports = (cb, authToken) => {
    const _responseInfoCallback = function(error, result) {
      if (error) {
        alert('Error fetching data: ' + error.toString());
      } else {
        //get all the data, then if the user does not have an entry in the database, create it
        //then log them in and send them to the roam page
        console.log('this is the fb data',result);

        //sign in the user
        // this.setState({
        //   isLoading: true,
        // });
        fetch('http://107.170.251.113:3000/signin', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            password: result.id,
            email: result.id + '@facebook.com',
          })
        })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          //if there is no user, create an account for the user
          if(res.message === 'Incorrect email/password combination!'){
            fetch('http://107.170.251.113:3000/signup', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                firstName: result.first_name,
                lastName: result.last_name,
                password: result.id,
                email: result.id + '@facebook.com',
                picture: result.picture.data.url,
                gender: result.gender,
                facebook: true,
                facebookID: result.id
              })
            })
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              console.log('RESPONSE FROM SERVER ON SIGNUP PAGE', res);
              if (res.message === 'User created') {
                cb('Time',(result.id + '@facebook.com').toLowerCase(),authToken, result.id);
              }
            })
          } else{
            cb('Time',(result.id + '@facebook.com').toLowerCase(),authToken, result.id);
            // this.setState({
            //   isLoading: false
            // });
          }
        })
        .catch((error) => {
          console.log('Error handling facebook login:', error);
        });
      }
    }//.bind(this);  

    //need to update the list of friends and mutual friends
    const infoRequest = new GraphRequest(
      '/me?fields=first_name,last_name,picture,email,gender,age_range',
      null,
      _responseInfoCallback,
    );

    let getstuff = function() {
      new GraphRequestManager().addRequest(infoRequest).start();
    };

    getstuff();

  }

  // handleFacebookLogout() {

  //   const infoRequest = new GraphRequest(
  //     'me/permissions?fields=method(DELETE),access_token(' + this.state.token + ')',
  //     null,
  //     (error, result) => {
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         console.log(result);
  //       }
  //     }
  //   );

  //   let getstuff = function() {
  //     new GraphRequestManager().addRequest(infoRequest).start();
  //   };

  //   getstuff();
  // }
