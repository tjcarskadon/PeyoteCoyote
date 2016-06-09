import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

var Main = require('./App/Components/Main');
//These are just here for dev. Change the title and 
//component in <NaigatorIOS to put back the signin /up
var Time = require('./App/Components/Time');
var Host = require('./App/Components/Host');
var Dte = require('./App/Components/Dte');

console.ignoredYellowBox = [
    'Warning: Failed propType',
    // Other warnings you don't want like 'jsSchedulingOverhead',
  ];




class roam extends Component{

renderScene (route, navigator) {
    if(route.name === 'Dte') {
      return <Dte navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Host') {
      return <Host navigator={navigator} {...route.passProps}/>
    }
     if(route.name === 'Time') {
      return <Time navigator={navigator} {...route.passProps}/>
    }
}

  render() {
    return (
      <Navigator
      style={{flex: 1}}
      initialRoute={{name: 'Host'}}
      renderScene={ this.renderScene }
         />
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red'
  },
});

AppRegistry.registerComponent('roam', () => roam);
