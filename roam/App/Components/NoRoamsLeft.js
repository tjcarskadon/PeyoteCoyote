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

class NoRoamsLeft extends Component {
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
        <Text style={defaultStyles.header}>No more roams near you</Text>
        <TouchableHighlight 
          style = {defaultStyles.button} 
          onPress = { () => this.nav('Host') } >
          <Text style={defaultStyles.buttonText}>Become a host</Text>
        </TouchableHighlight>
      </Image>
    )
  }



}

module.exports = NoRoamsLeft;