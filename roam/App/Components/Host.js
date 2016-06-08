'use strict';
import React, { Component } from 'react';
const styles = require('./Helpers/styles');

const Dte = require('./Dte');

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

class Host extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(), //have to get this date from the date picker now
      datePickerMode: 'hidden',
    };
  }

  
//TODO: Remove this 
toggleDatePicker(){
  var mode = this.state.datePickerMode === 'hidden' ? 'visible' : 'hidden';
  this.setState({datePickerMode: mode});    
}

handleDatePage() {
    this.setState({
      isLoading: true
    });
    this.props.navigator.push({
      title: 'Host a roam',
      component: Dte
    });
    this.setState({
      isLoading: false
    });
  }


  render () {

    return (
      <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
      <View style={styles.hostContainer}>
      <Text style={styles.header}>Host a roam</Text>

      <TextInput
          style={styles.submit} 
          autoCapitalize="none"
          placeholder="Enter Event Title"
          placeholderTextColor="white"
          // onChangeText={(text) => this.setState({email: text})} ###do something with this
          // value={this.state.email} 
      />
      
      <TouchableHighlight onPress={this.handleDatePage.bind(this)}>
        <View style={styles.dateViewBox}>
          <View>
            <Text style={styles.dateViewLabel}>Choose a Date:</Text>
          </View>
          <View>
            <Text style={styles.dateViewDate}> > </Text>
          </View>
        </View>
      </TouchableHighlight>

      <View style={styles.locViewBox}>
          <View>
            <Text style={styles.locViewLabel}>Pick a Location:</Text>
          </View>
          <View>
            <Text style={styles.locViewNext}> > </Text>
          </View>
        </View>  
      <TextInput
        style={styles.submit} 
        autoCapitalize="none"
        placeholder="Enter roam description"
        placeholderTextColor="white"
          // onChangeText={(text) => this.setState({email: text})} ###do something with this
          // value={this.state.email} 
      />
    </View>
      </Image>
    );
  }
}
module.exports = Host;