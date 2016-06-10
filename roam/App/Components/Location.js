'use strict';
import React, { Component } from 'react';
const defaultStyles = require('./Helpers/styles');
const Dte = require('./Dte');
const Host = require('./Host');
const Geolocation = require('./Geolocation');
const key = require('../Utils/apiKeys').geocodeKey;

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

class Location extends Component {
  constructor (props) {
    super(props);
    this.state = {
      locName: '',
      street: '',
      city: '',
      st: '',
      marker: {},
      buttonMode: 'address'
    }
  }

  handleLookup () {

    let addr = this.state.street + ', ' + this.state.city +', ' + this.state.st;
    addr = addr.replace(/\s/g,'+'); 
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+addr+'&key='+key)
    .then((response) => response.text())
    .then((responseText) => {
      responseText = JSON.parse(responseText);
      let code = responseText.status;
      let fAddr = responseText.results[0].formatted_address;
      let lat = responseText.results[0].geometry.location.lat;
      let lng = responseText.results[0].geometry.location.lng;
      this.handlePinDrop(code, fAddr, lat, lng);
    })
    .catch((error) => {
      console.warn(error);
    });

  }

 handlePinDrop (code, fAddr, lat, lng) {
  if(code !== "OK") {
    console.log('handle a bad address');
  } else {
    this.setState({
      marker: {
       title: fAddr,
       latitude: lat,
       longitude: lng
     }
   })
    this.toggleButton();
  }
}

  toggleButton () {
    let mode = this.state.buttonMode === 'address' ? 'create' : 'address';
    this.setState({buttonMode: mode});  
  }

  nav (path) {
    this.props.navigator.push( {
      name: path,
        passProps: {
          userEmail: this.props.userEmail,
          locName: this.state.locName,
          address: this.state.street + ' ' + this.state.city + ' ' + this.state.st,
          lat: this.state.marker.latitude,
          lng: this.state.marker.longitude,
          titleText: this.props.titleText,
          descText: this.props.descText,
          capacity: this.props.capacity,
          price:this.props.price,
          isHost: this.props.isHost,
          date: this.props.date,
          time: this.props.time
        }
    });
  }
 
  render () {

    let addressButton = (
            <View>
               <TouchableHighlight
                 style={defaultStyles.button}
                 onPress={() => this.handleLookup()}
                 underlayColor="white" >
                 <Text style={defaultStyles.buttonText}>Find Location</Text>
               </TouchableHighlight>
            </View>
      );

    let createRoamButton = (
            <View>
               <TouchableHighlight
                 style={defaultStyles.button}
                 onPress={() => this.nav('Host')}
                 underlayColor="white" >
                 <Text style={defaultStyles.buttonText}>Create Roam</Text>
               </TouchableHighlight>
            </View>
      );

    return (
     <Image style={defaultStyles.backgroundImage} source={require('../../imgs/uni.jpg')}>
        <View style={styles.mainContainer}>
          <View> 
            <Text style={styles.header}> Choose a Location </Text>
          </View>
          <View>           
            <Geolocation showUser={false} markers={[this.state.marker]} />
          </View>
          <View style={styles.form}>
            <View>
              <TextInput style={defaultStyles.submit} 
              autoCaptialize= 'none'
              placeholder="Location name"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({locName: text})}
             />
            </View>
            <View>
              <TextInput style={defaultStyles.submit} 
              autoCaptialize= 'none'
              placeholder="Street Address"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({street: text})}
             />
            </View>
            <View>
              <TextInput style={defaultStyles.submit} 
              autoCaptialize= 'none'
              placeholder="City"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({city: text})}
             />
            </View>
            <View>
              <TextInput style={defaultStyles.submit} 
              autoCaptialize= 'none'
              placeholder="State"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({st: text})}
             />
            </View>
            {this.state.buttonMode === 'address' ? addressButton : createRoamButton}
          </View> 
       </View>
    </Image>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1
  },

  header: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  }
});

module.exports = Location;