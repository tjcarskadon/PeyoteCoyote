import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
  TouchableHighlight
} from 'react-native';

const Main = require('./App/Components/Main');
//These are just here for dev. Change the title and 
//component in <NaigatorIOS to put back the signin /up
const Time = require('./App/Components/Time');
const Host = require('./App/Components/Host');
const Dte = require('./App/Components/Dte');
const styles = require('./App/Components/Helpers/styles');
const Location = require('./App/Components/Location');''
const SignUp = require('./App/Components/Signup');
const Pending = require('./App/Components/PendingRoam');
const Confirmation =  require('./App/Components/Confirmation');
const JoinView = require('./App/Components/JoinView');

console.ignoredYellowBox = [
    'Warning: Failed propType',
    // Other warnings you don't want like 'jsSchedulingOverhead',
  ];



class roam extends Component{

renderScene (route, navigator) {
    if(route.name === 'Main') {
      return <Main navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Confirmation') {
      return <Confirmation navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Pending') {
      return <Pending navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'SignUp') {
      return <SignUp navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Dte') {
      return <Dte navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Host') {
      return <Host navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'JoinView') {
      return <JoinView navigator={navigator} {...route.passProps}/>
    }
     if(route.name === 'Time') {
      return <Time navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Location') {
      return <Location navigator={navigator} {...route.passProps}/>
    }
}

  render() {
    return (
      <Navigator
      style={{flex: 1}}
      initialRoute={{name: 'Main'}}
      renderScene={ this.renderScene }
      navigationBar={
             <Navigator.NavigationBar 
               style={ styles.nav } 
               routeMapper={NavigationBarRouteMapper} />} 
         />
    );
  }
};

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
           underlayColor="black"
           onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>
    )} 
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return ( <TouchableHighlight
                                onPress={ () => route.onPress() }>
                                <Text style={ styles.rightNavButtonText }>
                                    { route.rightText || 'Right Button' }
                                </Text>
                              </TouchableHighlight> )
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.navTitle }>roam</Text>
  }
};


// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: 'red'
//   },
// });

AppRegistry.registerComponent('roam', () => roam);
