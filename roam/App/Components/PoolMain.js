import React, { Component } from 'react';
var defaultStyles = require('./Helpers/styles');
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

class PoolMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Image style={defaultStyles.backgroundImage} source={require('../../imgs/uni.jpg')}>
        <View style={defaultStyles.container}>
          <View>
            <Text style={defaultStyles.header}>Exciting group meetings</Text>
          </View>
          <TouchableHighlight
            style={defaultStyles.button}
            onPress={() => this.nav('Host')}
            underlayColor="white" >
              <Text style={defaultStyles.buttonText}> Host a roam </Text>
          </TouchableHighlight>  
          <TouchableHighlight
            style={defaultStyles.button}
            onPress={() => this.nav('Join')} 
            underlayColor="white" >
              <Text style={defaultStyles.buttonText}> Join! </Text>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }

}

module.exports = PoolMain;