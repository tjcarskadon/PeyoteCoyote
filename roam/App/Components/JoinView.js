import React, { Component } from 'react';
var defaultStyles = require('./Helpers/styles');
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
      <Image style={defaultStyles.backgroundImage} source={require('../../imgs/uni.jpg')}>
          <View style={styles.card}>
            
            <View style={styles.cardTitleWrap}>
              <Text style={styles.cardHeader}>{this.state.roams[0].title}</Text>
            </View>
            
            <View style={styles.cardTimeWrap}>
              <Text style={styles.cardTimeText}>{this.state.roams[0].date}</Text>
            </View>
            
            <View style={styles.cardMap}>
              <Geolocation showUser={false} markers = {[this.state.roams[0].marker]}/>
            </View>

            
            <View style={styles.icons}>
              
              <View style={styles.cardPriceWrap}>
                <View>
                  <Image style={styles.priceIcon} source={require('../../imgs/dollar.png')}/>
                </View>
                <View style={styles.priceTextWrap}>
                  <Text style={styles.priceText}> {this.state.roams[0].price}</Text>
                </View>
              </View>
              
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
                <Text style={defaultStyles.buttonText}>Pass</Text>
              </TouchableHighlight>
              <TouchableHighlight 
                style = {styles.cardButton} 
                onPress = {this.handleEnroll.bind(this)} >
                <Text style={defaultStyles.buttonText}>Enroll</Text>
              </TouchableHighlight>
            </View>
          </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  header2: {
    fontSize: 50,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: 'white',
    borderBottomWidth: 5,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20

  },

  cardTitleWrap: {
    marginTop: 20,
    marginBottom: 0
  },

  cardHeader: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },
  cardTimeText: {
    marginBottom: 20,
    fontSize: 17,
    fontWeight: "400",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 2
  },
  
  cardButton: {
    height: 50,
    width: 130,
    flexDirection: 'row',
    backgroundColor: '#ff0066',
    borderRadius:10,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 40
  },
  cardMap: {
    marginTop: -15,
    width: 300,
    height: 300
  },
  cardDescription: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Gill Sans',
    textAlign: 'justify',
    letterSpacing: 0
    
  },
  icons: {
    backgroundColor: 'red',
    marginTop: -80,
    height: 40,
    marginLeft: -35
    
  },

  cardAttendingWrap: {
    flex: 1,
    flexDirection: 'row'
  },
  cardCapacityWrap: {
    flex: 1,
    flexDirection: 'row'
  },
  cardPriceWrap: {
    flex: 1,
    flexDirection: 'row'
  },

  participantsText: {
    fontSize:25
  },
  capacityText: {
    fontSize: 25
  },
  priceText: {
    fontSize: 25
  },

  priceIcon: {
    width: 32,
    resizeMode: 'contain',
    marginTop: -312,
    marginLeft: -10
  },
  participantsIcon: {
    width:18,
    resizeMode: 'contain',
    marginTop: -348,
    marginLeft: 125
  },
  capacityIcon: {
    // marginTop: -388,
    marginLeft: 180,
    width:30,
    resizeMode: 'contain',
  },
  participantsWrap: {
    // marginTop: -271,
    marginLeft: -5
  },
  capacityWrap: {
    // marginTop: -271,
    marginLeft: -3
  },
  priceTextWrap: {
    // marginTop: -71,
    marginLeft: -4
  },

  cardDescriptionWrap: {
    marginTop: -100,
    paddingLeft: 20,
    paddingRight: 20,
    
  }, 
  cardControls: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },


});

module.exports = JoinView;