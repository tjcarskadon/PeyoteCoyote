import React, { Component } from 'react';
var defaultStyles = require('./Helpers/styles');
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

class XMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Image style={defaultStyles.backgroundImage} source={require('../../imgs/uni.jpg')}>
        <View style={defaultStyles.container}>
          <View>
            <Text style={defaultStyles.header}>Find your perfect date</Text>
          </View>
          <TouchableHighlight
            style={defaultStyles.button}
            onPress = { () => (this.props.navigator.push({name: 'X'})) } 
            underlayColor="white">
              <Text style={defaultStyles.buttonText}> Start </Text>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }

}

module.exports = XMain;