import React, { Component } from 'react';

var Interests = require('./Interests');

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  submit: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginBottom: 15,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 35,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      passwordAgain: '',
      email: '',
      isLoading: false,
      error: false
    }
  }

  handleSubmit() {
    console.log(this.state);
    this.setState({
      isLoading: true
    });

    fetch('http://localhost:3000', {
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
      console.log(res);
      console.log('Sent ROAM request!');
    })
    .catch((error) => {
      console.log('Error handling submit:', error);
    });
    //Need logic to check if username is taken in the database
    //Check if the passwords are matching
    //Check if the email is valid
    //Route to the hobbies screen
    this.props.navigator.push({
      title: 'Select Interests',
      component: Interests
    });
    //Set isloading to false after conditions
    this.setState({
      isLoading: false
    });
  }

  render() {
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Create an acount and you will be roaming in no time! </Text>
        {/* Fields that we want to bind the username and password input */}
        <TextInput
          style={styles.submit}
          placeholder="Your first name"
          onChangeText={(text) => this.setState({firstName: text})} 
          value={this.state.firstName}
          />
        <TextInput
          style={styles.submit}
          placeholder="Your last name"
          onChangeText={(text) => this.setState({lastName: text})} 
          value={this.state.lastName}
          />
        <TextInput
          style={styles.submit}
          placeholder="Enter a password"
          onChangeText={(text) => this.setState({password: text})} 
          value={this.state.password}
          />
        <TextInput
          style={styles.submit}
          placeholder="Enter password again"
          onChangeText={(text) => this.setState({passwordAgain: text})} 
          value={this.state.passwordAgain}
          />
        <TextInput
          style={styles.submit}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})} 
          value={this.state.email}
          />          
        <TouchableHighlight 
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white" >
            <Text style={styles.buttonText}> Sign-Up! </Text>
        </TouchableHighlight>
        {/* This is the loading animation when isLoading is set to true */}
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large"></ActivityIndicatorIOS>
        {showErr}
      </View>
    )
  }
}

module.exports = SignUp;