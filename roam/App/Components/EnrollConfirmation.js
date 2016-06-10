'use strict'
import React, { Component } from 'react';
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

class EnrollConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  nav (path, email) {
    this.props.navigator.push({
      name: path,
      passProps: {
        email: email
      }
    })
  }
  
  render() {
    return (
      <Image style={defaultStyles.backgroundImage} source={require('../../imgs/uni.jpg')}>
        <Text style={defaultStyles.header}>Hooray!{'\n'}You are now enrolled!</Text>

        <TouchableHighlight 
          style = {defaultStyles.button} 
          onPress = { () => this.nav('Join') } >
          <Text style={defaultStyles.buttonText}>Go Back</Text>
        </TouchableHighlight>
      </Image>
    )
  }



}

module.exports = EnrollConfirmation;