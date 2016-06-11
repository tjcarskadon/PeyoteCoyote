import React, { Component } from 'react';

// var Interests = require('./Interests');
var Time = require('./Time');

var defaultStyles = require('./Helpers/styles');

import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log('SignUp loaded!!!!!!!!!!!');
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      passwordAgain: '',
      email: '',
      isLoading: false,
      error: false,
      errorMessage: ''
    };
  }

  nav(path, email) {
    this.props.navigator.push({
      name: path,
      passProps: {
        email: email
      }
    })
  }

  handleSubmit() {
    console.log(this.state);
    this.setState({
      isLoading: true
    });
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //check if the passwords entered matches
    if (this.state.password !== this.state.passwordAgain) {
      this.setState({isLoading: false, error: true, errorMessage: 'Passwords do not match!'});
    }
    //check if the email supplied is valid
    if (!re.test(this.state.email)) {
      this.setState({isLoading: false, error: true, errorMessage: 'Invalid Email!'});
    }

    //ensure all fields in our state is not empty
    if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.password !== '' && this.state.passwordAgain !== '' && (this.state.password === this.state.passwordAgain) && re.test(this.state.email)) {

      // fetch('http://107.170.251.113:3000/signup', {
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          password: this.state.password,
          email: this.state.email,
        })
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log('RESPONSE FROM SERVER ON SIGNUP PAGE', res);
        if (res.message === 'User created') {
          this.nav('Time', this.state.email.toLowerCase());
          this.setState({
            isLoading: false
          });
        } else {
          this.setState({
            error: true,
            errorMessage: 'Email already exists!',
            isLoading: false
          });
          console.log('CURRENT ERROR:',this.state.error);
          console.log('SIGNUP ERROR MESSAGE:', this.state.errorMessage);
        }

      })
      .catch((error) => {
        console.log('Error handling submit:', error);
      });
    }

  }

  render() {
    var showErr = (
      this.state.error ? <Text style={defaultStyles.errorMessage}> {this.state.errorMessage} </Text> : <View></View>
    );
    return(
      <Image style={defaultStyles.backgroundImage}
        source={require('../../imgs/uni.jpg')} >
        <Text style={defaultStyles.title}> sign up </Text>
        {/* Fields that we want to bind the username and password input */}
        <TextInput
          style={defaultStyles.submit}
          placeholder="Your first name"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({firstName: text})}
          value={this.state.firstName}
          />
        <TextInput
          style={defaultStyles.submit}
          placeholder="Your last name"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({lastName: text})}
          value={this.state.lastName}
          />
        <TextInput
          style={defaultStyles.submit}
          placeholder="Enter a password"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          />
        <TextInput
          style={defaultStyles.submit}
          placeholder="Enter password again"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({passwordAgain: text})}
          value={this.state.passwordAgain}
          secureTextEntry={true}
          />
        <TextInput
          style={defaultStyles.submit}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          />
        <View style={styles.buttonContainer}>  
          <TouchableHighlight
            style={[defaultStyles.button, styles.button]}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white" >
              <Text style={defaultStyles.buttonText}> Create Account </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[defaultStyles.button, styles.button]}
            onPress={() => this.nav('Main')}
            underlayColor="white" >
              <Text style={defaultStyles.buttonText}> Cancel </Text>
          </TouchableHighlight>
        </View>
        {/* This is the loading animation when isLoading is set to true */}
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large"></ActivityIndicatorIOS>
        {showErr}
      </Image>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 120
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});


module.exports = SignUp;
