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


class Host extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
      datePickerMode: 'hidden',
    };
  }

onDateChange (date) {
    this.setState({date: date});
  }

toggleDatePicker(){
  var mode = this.state.datePickerMode === 'hidden' ? 'visible' : 'hidden';
  console.log('=========>', this.state.datePickerMode);
  this.setState({datePickerMode: mode});    
}

  render () {

     var hr = this.state.date.getHours() > 12 ? this.state.date.getHours() - 12 : this.state.date.getHours();
     var min = this.state.date.getMinutes() <=9 ? '0' + this.state.date.getMinutes() : this.state.date.getMinutes();
     var suf = this.state.date.getHours() > 12 ? "PM" : "AM";
     var datePicker = (
      <View style={styles.datePicker}>

        <TouchableOpacity onPress={this.toggleDatePicker.bind(this)} style={{ padding: 5, alignItems: 'flex-end' }}>
        </TouchableOpacity>
      
        <DatePickerIOS
                  date={this.state.date}
                  mode="datetime"
                  onDateChange={ this.onDateChange.bind(this) }
                />
      </View>
    );

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
      
      <TouchableWithoutFeedback onPress={this.toggleDatePicker.bind(this)}>
        <View style={styles.dateViewBox}>
          <View>
            <Text style={styles.dateViewLabel}>Choose a Date:</Text>
          </View>
          <View>
            <Text style={styles.dateViewDate}>{ this.state.date.getMonth() }/{ this.state.date.getDate() }/{ this.state.date.getFullYear() }  {hr}:{min} {suf} </Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
        {this.state.datePickerMode == 'visible' ? datePicker : <View/>}
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