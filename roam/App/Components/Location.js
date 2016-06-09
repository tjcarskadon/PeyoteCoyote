'use strict';
import React, { Component } from 'react';
const styles = require('./Helpers/styles');
const Dte = require('./Dte');
const Host = require('./Host');

import {
  Image,  
  DatePickerIOS,
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicatorIOS,
} from 'react-native';

class Location extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
     <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
      <Text> Something </Text>
    </Image>
    )
  }
}

module.exports = Location;