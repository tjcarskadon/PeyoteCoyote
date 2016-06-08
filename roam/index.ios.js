import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

var Main = require('./App/Components/Main');
//These are just here for dev. Change the title and 
//component in <NaigatorIOS to put back the signin /up
var Time = require('./App/Components/Time');
var Host = require('./App/Components/Host');

console.ignoredYellowBox = [
    'Warning: Failed propType',
    // Other warnings you don't want like 'jsSchedulingOverhead',
  ];


class roam extends Component{
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Host',
          component: Host
        }} />
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
