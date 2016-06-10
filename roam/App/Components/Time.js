import React, { Component } from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';
const Confirmation = require('./Confirmation');
const Separator = require('./Helpers/Separator');
const styles = require('./Helpers/styles');
const Host = require('./Host');
const Geolocation = require('./Geolocation');

const coordinates = {};

import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  MapView
} from 'react-native';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '1 hour',
      coords: {},
        region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  handleSelected(choice) {
    this.setState({
      selectedOption: choice
    });
  }

  handleSubmit() {
    console.log('Sending ROAM request!', coordinates);
    console.log('EMAIL!!!!', this.props.email);
    //Leave this as a breadcrumb incase we go back to NavigatorIOS
    // this.props.navigator.push({
    //   title: 'Confirmation',
    //   email: this.props.navigator.navigationContext._currentRoute.email,
    //   component: Confirmation
    // });
    this.nav('Confirmation', this.props.email);

    fetch('http://localhost:3000/roam', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time: this.state.selectedOption,
        coordinates: this.state.coords,
        userEmail: this.props.email
        // userEmail: this.props.navigator.navigationContext._currentRoute.email
      })
    })
    .then((res) => {
      console.log('Added to db. Waiting for ROAM request confirmation!');
    })
    .catch((error) => {
      console.log('Error handling submit:', error);
    });
  }

  //BreadCrubm incase we go back to NaviatorIOS
  // handleHost() {
  //   this.setState({
  //     isLoading: true
  //   });
  //   this.props.navigator.push({
  //     title: 'Host a roam',
  //     component: Host
  //   });
  //   this.setState({
  //     isLoading: false
  //   });
  // }

  nav (path, email) {
    this.props.navigator.push({
      name: path,
      passProps: {
        email: email
      }
    })
  }

  changeCoords(newCoords) {
    this.setState({coords: newCoords});
  }
  render () {
    const options = [
      '1 hour',
      '2 hours',
      '4 hours',
      'Anytime'
    ];
    return (
      <Image style={styles.backgroundImage}
      source={require('../../imgs/uni.jpg')} >
        <Geolocation onChangeCoords = {this.changeCoords.bind(this)} />
        <Text style={styles.header}> pick a time: </Text>
        <SegmentedControls
          tint={'#ff0066'}
          selectedTint={'white'}
          backTint={'white'}
          options={options}
          allowFontScaling={false}
          fontWeight={'bold'}
          onSelection={this.handleSelected.bind(this)}
          selectedOption={this.state.selectedOption}
          />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)} >
            <Text style={styles.buttonText}> Roam! </Text>
        </TouchableHighlight>
         <TouchableHighlight
          style={styles.button}
          onPress={() => this.nav('Host')}
          underlayColor="white" >
            <Text style={styles.buttonText}> Host a roam </Text>
        </TouchableHighlight>
      </Image>
    );
  }
}






module.exports = Time;
