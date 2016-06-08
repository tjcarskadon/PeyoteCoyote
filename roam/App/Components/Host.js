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
      datePickerMode: 'hidden' 
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

     var datePicker = (
      <View style={styles.datePicker}>

        <TouchableOpacity onPress={this.toggleDatePicker.bind(this)} style={{ padding: 5, alignItems: 'flex-end' }}>
          <Text>Done</Text>
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
      
      <Text style={styles.header}>Host a roam</Text>

      <TextInput
          style={styles.submit} 
          autoCapitalize="none"
          placeholder="Enter Event Title"
          placeholderTextColor="white"
          // onChangeText={(text) => this.setState({email: text})} ###do something with this
          // value={this.state.email} 
      />
      
      <TextInput
        style={styles.submit} 
        autoCapitalize="none"
        placeholder="Enter roam description"
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
            <Text style={styles.dateViewDate}>{ this.state.date.getMonth() }/{ this.state.date.getDate() }/{ this.state.date.getFullYear() }</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
        {this.state.datePickerMode == 'visible' ? datePicker : <View/>}
        
      </Image>

    );
  }
}
module.exports = Host;