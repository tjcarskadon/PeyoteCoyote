'use strict';
import React, { Component } from 'react';
const defaultStyles = require('./Helpers/styles');
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
        userEmail: this.props.userEmail,
        date: date,
        time: time,
        titleText: this.props.titleText,
        descText: this.props.descText,
        capacity: this.props.capacity,
        price:this.props.price,
        locName: this.props.locName,
        address: this.props.address,
        latitude: this.props.lat,
        longitude: this.props.lng
      }
    })
  }

  render () {
      
    return (
    <Image style={defaultStyles.backgroundImage} source={require('../../imgs/uni.jpg')}>
    <View style={defaultStyles.dateContainer}>
      <View>
        <Text style={defaultStyles.header}>Schedule Roam</Text>
      </View> 
      <View>
        <View style={defaultStyles.dateViewBox}>
          <View>
            <Text style={[defaultStyles.dateViewLabel, styles.timeLabel]}>Roam Start:</Text>
          </View>
          <View>
              <Text style={[defaultStyles.submit, styles.box]}>{df.formatDate(this)}  {df.formatTime(this)}</Text>
          </View>
        </View>
        <View style={defaultStyles.dateViewBox}>
          <View>
            <Text style={[defaultStyles.dateViewLabel, styles.timeLabel]}>Roam End:</Text>
          </View>
          <View>
              <Text style={[defaultStyles.submit, styles.box, styles.endTime]}>{df.formatDate(this)}  {df.formatTime(this)}</Text>
          </View>
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
          style={defaultStyles.button}
          onPress={() => this.nav(df.formatDate(this), df.formatTime(this))}
          underlayColor="white" >
            <Text style={defaultStyles.buttonText}>Schedule</Text>
        </TouchableHighlight>
      </View>
    </View>
    </Image>
    )
  }

}

const styles = StyleSheet.create({
  box: {
    width: 225,
    textAlign: 'center',
    marginLeft: 10,
    height: 40
  },
  endTime: {
    justifyContent: 'space-between',
    marginLeft: 23
  },
  timeLabel: {
    marginTop: 10,
    marginLeft: 8 
  },
  datePicker: {
    borderTopWidth: 1,
    position: 'relative', 
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,  
    borderColor: '#fff', 
    height: 220,
    width: 370,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.3)'
  },

});

module.exports = Dte;