import React, { Component } from 'react';
var styles = require('./Helpers/styles');

import {
  Image,
  DatePickerIOS,
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';


//This is written in es5 because the date picker has problems with es6
var Host = React.createClass( {

   getDefaultProps () {
      return {
        date: new Date(),
        timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
      };
    },

    getInitialState () {
      return {
        date: this.props.date,
        timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
      };
    },

    onDateChange (date) {
      this.setState({date: date});
    },

    onTimezoneChange (event) {
      var offset = parseInt(event.nativeEvent.text, 10);
      if (isNaN(offset)) {
        return;
      }
      this.setState({timeZoneOffsetInHours: offset});
    },

    render () {
      return (
        <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
        <TextInput
            style={styles.submit} 
            autoCapitalize="none"
            placeholder="Enter Event Title"
            placeholderTextColor="white"
            // onChangeText={(text) => this.setState({email: text})} ###do something with this
            // value={this.state.email} 
            />
            <DatePickerIOS
            date={this.state.date}
            mode="date"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />
            <TextInput
            style={styles.submit} 
            autoCapitalize="none"
            placeholder="Enter roam description"
            placeholderTextColor="white"
            // onChangeText={(text) => this.setState({email: text})} ###do something with this
            // value={this.state.email} 
            />
        </Image>

      );
    }
  }
);
module.exports = Host;