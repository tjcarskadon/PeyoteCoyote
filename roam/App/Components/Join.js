'use strict'
import React, { Component } from 'react';
var defaultStyles = require('./Helpers/styles');
var Geolocation = require('./Geolocation');
import Tinder from './Tinder.js'
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
              longitude: -73.9911,
          },
          date: 'June 3, 2016 @ 8:00PM',
          price: '$18'
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
          price: '$0'
        }
      ],
      currentRoamIndex: 0
    };
    this.state.currentRoam = this.state.roams[this.state.currentRoamIndex];
  }
  

// <View>
//               <Image style={styles.capacityIcon} source={require('../../imgs/capacity.png')}/>
//               <Text style={styles.cardCapacity}>{this.state.roams[0].capacity}</Text>
//             </View>



//BRING BACK

// <View style={styles.card}>
            
//             <View style={styles.cardTitleWrap}>
//               <Text style={styles.cardHeader}>{this.state.currentRoam.title}</Text>
//             </View>
            
//             <View style={styles.cardTimeWrap}>
//               <Text style={styles.cardTimeText}>{this.state.currentRoam.date}</Text>
//             </View>
            
//             <View style={styles.cardMap}>
//               <Geolocation showUser={false} markers = {[this.state.currentRoam.marker]}/>
//             </View>

            
//             <View style={styles.icons}>
              
//               <View style={styles.cardPriceWrap}>
//                 <View>
//                   <Image style={styles.priceIcon} source={require('../../imgs/dollar.png')}/>
//                 </View>
//                 <View style={styles.priceTextWrap}>
//                   <Text style={styles.priceText}> {this.state.currentRoam.price}</Text>
//                 </View>
//               </View>
              
//               <View style={styles.cardAttendingWrap}>
//                 <View>
//                   <Image style={styles.participantsIcon} source={require('../../imgs/participants.png')}/>
//                 </View>
//                 <View style={styles.participantsTextWrap}>
//                   <Text style={styles.participantsText}> {this.state.currentRoam.attending}</Text>
//                 </View>
//               </View>

//               <View style={styles.cardCapacityWrap}>
//                 <View>
//                   <Image style={styles.capacityIcon} source={require('../../imgs/capacity.png')}/>
//                 </View>
//                 <View style={styles.capacityTextWrap}>
//                   <Text style={styles.capacityText}> {this.state.currentRoam.capacity}</Text>
//                 </View>
//               </View>
//             </View>

//             <View style={styles.cardDescriptionWrap}>
//               <Text style={styles.cardDescription}>{this.state.currentRoam.description}</Text>
//             </View>
//             <View style={styles.cardControls}>
//               <TouchableHighlight 
//                 style = {styles.cardButton} 
//                 onPress = {this.handleReject.bind(this)} >
//                 <Text style={defaultStyles.buttonText}>Pass</Text>
//               </TouchableHighlight>
//               <TouchableHighlight 
//                 style = {styles.cardButton} 
//                 onPress = {this.handleEnroll.bind(this)} >
//                 <Text style={defaultStyles.buttonText}>Enroll</Text>
//               </TouchableHighlight>
//             </View>
//           </View>

//BRING BACK






  render() {
    return (
      <Image style={defaultStyles.backgroundImage} source={require('../../imgs/uni.jpg')}>
        <Tinder style={{flex: 1}} currentRoam={'yeyeye'} navigator={this.props.navigator} />
      </Image>
    )
  }
}



module.exports = JoinView;