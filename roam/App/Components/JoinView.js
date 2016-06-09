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
          },
          date: 'June 3, 2016 @ 8:00PM',
          cost: '$18'
        },
        
        {
          title: 'Swinger getaway', 
          attending: 56, 
          capacity: 99,
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
    
  }

// <View>
//               <Image style={styles.capacityIcon} source={require('../../imgs/capacity.png')}/>
//               <Text style={styles.cardCapacity}>{this.state.roams[0].capacity}</Text>
//             </View>

  render() {
    return (
      <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
          <View style={styles.card}>
            <View style={styles.cardTitleWrap}>
              <Text style={styles.cardHeader}>{this.state.roams[0].title}</Text>
            </View>
            <View style={styles.cardMap}>
              <Geolocation showUser={false} markers = {[this.state.roams[0].marker]}/>
            </View>
            
            <View style={styles.icons}>
              <View style={styles.cardAttendingWrap}>
                <View>
                  <Image style={styles.participantsIcon} source={require('../../imgs/participants.png')}/>
                </View>
                <View style={styles.participantsWrap}>
                  <Text style={styles.participantsText}> {this.state.roams[0].attending}</Text>
                </View>
              </View>

              <View style={styles.cardCapacityWrap}>
                <View>
                  <Image style={styles.capacityIcon} source={require('../../imgs/capacity.png')}/>
                </View>
                <View style={styles.capacityWrap}>
                  <Text style={styles.capacityText}> {this.state.roams[0].capacity}</Text>
                </View>
              </View>
            </View>


            <View style={styles.cardDescriptionWrap}>
              <Text style={styles.cardDescription}>{this.state.roams[0].description}</Text>
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
                <Text style={styles.buttonText}>Enroll</Text>
              </TouchableHighlight>
            </View>
          </View>
      </Image>
    )
  }
}

module.exports = JoinView;