'use strict';
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
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicatorIOS,
} from 'react-native';

class Dte extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    } 
  }

  onDateChange (date) {
    this.setState({date: date});
  }




  render () {
      
    return (
      
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          onDateChange={this.onDateChange.bind(this)} />
      </View>
    )
  }

}

module.exports = Dte;