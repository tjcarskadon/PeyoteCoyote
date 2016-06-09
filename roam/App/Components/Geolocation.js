'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, MapView, ListView} from 'react-native'

var marker = {
  coordinate: {
    latitude: 37.78825,
    longitude: -122.4324
  },
  title: 'My marker',
  description: 'This is description for marker'
}

var styles = require('./Helpers/styles');
class Geolocation extends Component {
  constructor(props) {
    super(props);
    //load settings from props otherwise use defaults
    var showUserLocation = this.props.showUser === undefined ? true : this.props.showUser;
    var changePosFunction = this.props.onChangeCoords === undefined ? () => {} : this.props.onChangeCoords;  

    this.state = {
      showUserLocation: showUserLocation,
      changePosFunction: changePosFunction,
    };
  };


  componentDidMount () {

    if (!navigator.geolocation) {console.log('geoloaction not available')};
    if (navigator.geolocation) {console.log('geoloaction available')};
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
       console.log(initialPosition);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      this.state.changePosFunction(lastPosition);
      console.log('lastPosition',lastPosition);
      this.setState({latitude: lastPosition.coords.latitude});
      this.setState({latitude: lastPosition.coords.latitude});

      var newRegion = {
        latitude: lastPosition.coords.latitude,
        longitude: lastPosition.coords.longitude,
        latitudeDelta: 10,
        longitudeDelta: 10
      }

      this.setState({ region: newRegion });

      this.setState({ annotations: [{
        latitude: lastPosition.coords.latitude,
        longitude: lastPosition.coords.longitude,
        title: 'Current Location',
        subtitle: 'This is your current location'
      }]});
    });
  }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }

  render() {
    return (
      <MapView
        showsUserLocation={this.state.showUserLocation}
        style={map.map}
        followUserLocation={true} 
        annotations = {this.props.markers} >
      </MapView>
    );
  }
}

const map = StyleSheet.create({
  map: {
    height: 250,
    margin: 10,
    borderWidth: 0,
    borderColor: '#000',
    backgroundColor: 'transparent'
  },
});

module.exports = Geolocation;
