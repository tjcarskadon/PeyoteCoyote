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
    let n = new Date();
    let twoHours = n.setHours(n.getHours()+2);
    this.state = {
      date: new Date(),
      flag: false,
      endTime: new Date(twoHours)
    } 
  }

  onDateChange (date) {
    if(!this.state.flag) {
      this.setState({date: date});
    } else {
      this.setState({endTime: date})
    }
  }

  toggleFlag () {
   var f = this.state.flag ? false : true;
   this.setState({flag: f});
  }

 nav(startDate, startTime, endDate, endTime) {
    this.props.navigator.push({
      name: 'Host',
      passProps: {
        userEmail: this.props.userEmail,
        date: startDate,
        time: startTime,
        endDate: endDate,
        endTime: endTime,
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
    <View style={defaultStyles.Container}>
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
                <TextInput 
                onFocus={() => this.setState({flag: false})} 
                style={[defaultStyles.submit, styles.box]} 
                multiline={true}>{df.formatDate(this, 'date')}  {df.formatTime(this, 'date')}
                </TextInput>
            </View>
          </View>
          <View style={defaultStyles.dateViewBox}>
            <View>
              <Text style={[defaultStyles.dateViewLabel, styles.timeLabel]}>Roam End:</Text>
            </View>
              <View>
                  <TextInput 
                  onFocus={() => this.setState({flag: true})} 
                  style={[defaultStyles.submit, styles.box, styles.endTime]} 
                  multiline={true}>{df.formatDate(this, 'endTime')}  {df.formatTime(this, 'endTime')}  
                  </TextInput>
              </View>    
         </View>   
        </View>
        <View style={styles.datePicker}>
          <DatePickerIOS
            date={this.state.flag ? this.state.endTime : this.state.date}
            mode="datetime"
            onDateChange={this.onDateChange.bind(this)} />
        </View>
        <View>
           <TouchableHighlight
            style={defaultStyles.button}
            onPress={() => this.nav(df.formatDate(this, 'date'), df.formatTime(this, 'date'), df.formatDate(this, 'endTime'), df.formatTime(this, 'endTime'))}
            underlayColor="white" >
              <Text style={defaultStyles.buttonText}>Schedule</Text>
          </TouchableHighlight>
        </View>
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
    height: 40,
    padding: 5,
    marginRight: 5,
    marginBottom: 15
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