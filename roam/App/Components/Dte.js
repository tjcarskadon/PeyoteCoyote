'use strict';
import React, { Component } from 'react';
const styles = require('./Helpers/styles');
const df = require('./Helpers/dateFormat');
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

 nav(date, time) {
    this.props.navigator.push({
      name: 'Host',
      passProps: {
        date: date,
        time: time
      }
    })
  }

  render () {
      
    return (
    <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
    <View style={styles.dateContainer}>
      <View>
        <Text style={styles.header}>Pick a Date:</Text>
      </View>
      <View style={styles.dateViewBox}>
        <View>
          <Text style={styles.dateViewLabel}>Selected Date:</Text>
        </View>
        <View>
            <Text style={styles.dateViewDate}>{df.formatDate(this)}  {df.formatTime(this)}</Text>
        </View>
      </View>
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          onDateChange={this.onDateChange.bind(this)} />
      </View>
      <View>
         <TouchableHighlight
          style={styles.button}
          onPress={() => this.nav(df.formatDate(this), df.formatTime(this))}
          underlayColor="white" >
            <Text style={styles.buttonText}>Test</Text>
        </TouchableHighlight>
      </View>
    </View>
    </Image>
    )
  }

}

module.exports = Dte;