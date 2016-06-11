'use strict';
import React, { Component } from 'react';
const defaultStyles = require('./Helpers/styles');
const Dte = require('./Dte');
const Host = require('./Host');
const Geolocation = require('./Geolocation');
// const key = require('../Utils/apiKeys').geocodeKey;
const {GooglePlacesAutocomplete} = require('./GooglePlacesAutocomplete');
const key = require('../Utils/apiKeys').places;

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
      marker: {}
    }
  }

  handleLookup () {

    let addr = this.state.street + ', ' + this.state.city +', ' + this.state.st;
    addr = addr.replace(/\s/g,'+');

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
  handleLookup (obj) {
      let name = obj.name;    
      let fAddr = obj.formatted_address;
      let lat = obj.geometry.location.lat;
      let lng = obj.geometry.location.lng;
      this.handlePinDrop(name, fAddr, lat, lng);
  }

 handlePinDrop (name, fAddr, lat, lng) {
    this.setState({
      marker: {
       title: name,
       address: fAddr,
       latitude: lat,
       longitude: lng
     }
   });
}

  nav (path) {
    this.props.navigator.push( {
      name: path,
        passProps: {
          userEmail: this.props.userEmail,
          locName: this.state.marker.title,
          address: this.state.address,
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
          <TouchableWithoutFeedback>
      <View>
        <GooglePlacesAutocomplete
        placeholder='Search'
        placeholderTextColor="white"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        onPress={(data, details = true) => this.handleLookup(details)}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: key,
          language: 'en', // language of the results
          // types: '(cities)', // default: 'geocode'
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        // predefinedPlaces={[homePlace, workPlace]}
      />
      </View>
    </TouchableWithoutFeedback>
          {createRoamButton}
       </View>
    </Image>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
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
  },

  button: {
    position: 'absolute'
  }

});

module.exports = Location;