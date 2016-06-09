import React, { Component } from 'react';
var styles = require('./Helpers/styles');
var Geolocation = require('./Geolocation');
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

class JoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roams: [
        {
          title: 'Pub crawl', 
          attending: 15, 
          capacity: 30,
          description: 'EVERY WEEK PUB CRAWL SAN FRANCISCO BRINGS TOGETHER PEOPLE FROM AROUND THE WORLD TO EXPERIENCE THE ULTIMATE NIGHT OUT IN SF.',
          marker: {
            title: 'Union Square',
              latitude: 40.7359,
              longitude: -73.9911
            // latitude: 37.787998,
            // longitude: -122.4096314
          },
          date: 'June 3, 2016 @ 8:00PM',
          cost: '$18'
        },
        
        {
          title: 'Swinger getaway', 
          attending: 1, 
          capacity: 1000,
          description: 'EVERY WEEK SWINGERS SAN FRANCISCO BRINGS TOGETHER PEOPLE FROM AROUND THE WORLD TO EXPERIENCE THE ULTIMATE NIGHT.',
          marker: {
            title: 'Tenderloin',
            latitude: 37.7847,
            longitude: -122.4145
          },
          date: 'June 9, 2016 @ 9:00PM',
          cost: '$99'
        }
      ]
    };

  }
  handleReject() {
    console.log('you don\'t like it');
    var roams = this.state.roams;
    roams.splice(0,1);
    this.setState({roams: roams});
    console.log('ROAMS:' + JSON.stringify(this.state.roams));
    console.log('MARKER', this.state.roams[0].marker);
  }

  handleEnroll() {
    console.log('it seems like you like it');
    
    this.setState({title:'Second title'});
    console.log(this.state.title);
    this.render();  
  }



  render() {
    return (
      <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
          <View style={styles.card}>
            <View style={styles.cardTitleWrap}>
              <Text style={styles.header}>{this.state.roams[0].title}</Text>
            </View>
            <View style={styles.cardMap}>
              <Text style={styles.location}>Event Location:</Text>
              <Geolocation showUser={false} markers = {[this.state.roams[0].marker]}/>
            </View>
            <View style={styles.cardAttendingWrap}>
              <Text style={styles.cardAttending}>Attending: {this.state.roams[0].attending}</Text>
              <Text style={styles.cardCapacity}>Capacity: {this.state.roams[0].capacity}</Text>
            </View>
            <View style={styles.cardControls}>
              <TouchableHighlight 
                style = {styles.cardButton} 
                onPress = {this.handleReject.bind(this)} >
                <Text style={styles.buttonText}>Pass</Text>
              </TouchableHighlight>
              <TouchableHighlight 
                style = {styles.cardButton} 
                onPress = {this.handleEnroll.bind(this)} >
                <Text style={styles.buttonText}>Change title</Text>
              </TouchableHighlight>
            </View>
          </View>
      </Image>
    )
  }
}

module.exports = JoinView;