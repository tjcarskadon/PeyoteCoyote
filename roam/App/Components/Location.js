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
      name: '',
      street: '',
      city: '',
      st: '',
      zip: '',
      marker : {}
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
    this.setState({marker: {
       title: fAddr,
       latitude: lat,
       longitude: lng
     }
   })
  }


 } 

//need to create a toggle for the confirm button
/* 
 <View>
              <TextInput style={defaultStyles.submit} 
              autoCaptialize= 'none'
              placeholder="Location name"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({name: text})}
             />
            </View>
           
             
            <View>
              <TextInput style={defaultStyles.submit} 
              autoCaptialize= 'none'
              placeholder="Zip"
              placeholderTextColor="white"
              onChangeText={(text) => this.setState({zip: text})}
             />
            </View>

*/
  render () {

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
            <View>
             <TouchableHighlight
               style={defaultStyles.button}
               onPress={() => this.handleLookup()}
               underlayColor="white" >
               <Text style={styles.buttonText}>Find Location</Text>
             </TouchableHighlight>
            </View>
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