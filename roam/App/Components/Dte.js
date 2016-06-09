'use strict';
import React, { Component } from 'react';
var styles = require('./Helpers/styles');
var Host = require('./Host');

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

formatDate () {
  let month = this.state.date.getMonth() + 1; 
  console.log('===========>', this.state.date);
  let day = this.state.date.getDate(); 
  let year = this.state.date.getFullYear();

  return month + "/" + day + "/" + year;

}

formatTime () {
   let hr = this.state.date.getHours() > 12 ? this.state.date.getHours() - 12 : this.state.date.getHours();
   let min = this.state.date.getMinutes() <=9 ? '0' + this.state.date.getMinutes() : this.state.date.getMinutes();
   let suf = this.state.date.getHours() > 12 ? 'PM' : 'AM';

  return hr + ':' + min + ' ' + suf;

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
      <View style={styles.dateViewBox}>
        <View>
          <Text style={styles.dateViewLabel}>Choose a Date:</Text>
        </View>
        <View>
            <Text style={styles.dateViewDate}>{this.formatDate()}  {this.formatTime()}</Text>
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
          onPress={() => this.nav(this.formatDate(), this.formatTime())}
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