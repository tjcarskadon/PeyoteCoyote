import React, { Component } from 'react';
var styles = require('./Helpers/styles');
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

class JoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
        <Text style={styles.title}>I AM JOIN!</Text>
      </Image>
    )
  }
}

module.exports = JoinView;