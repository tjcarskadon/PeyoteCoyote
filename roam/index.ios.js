import React, { Component } from 'react';
import JoinPool from './App/Components/JoinPool'
import XMain from './App/Components/XMain'
import X from './App/Components/X'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

const Main = require('./App/Components/Main');
//These are just here for dev. Change the title and 
//component in <NaigatorIOS to put back the signin /up
const Time = require('./App/Components/Time');
const Host = require('./App/Components/Host');
const Dte = require('./App/Components/Dte');
const defaultStyles = require('./App/Components/Helpers/styles');
const Location = require('./App/Components/Location');''
const SignUp = require('./App/Components/Signup');
const Pending = require('./App/Components/PendingRoam');
const Confirmation =  require('./App/Components/Confirmation');
const EnrollConfirmation = require('./App/Components/EnrollConfirmation');

console.ignoredYellowBox = [
    'Warning: Failed propType',
    // Other warnings you don't want like 'jsSchedulingOverhead',
  ];

class roam extends Component{
   //main component, switches between tabbed app and signup pages
   renderScene(route, navigator) {
    if(route.name === 'Main') {
      return <Main tite={'Welcome'} navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Time') {
      return <TabbedApp navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'SignUp') {
      return <SignUp navigator={navigator} {...route.passProps}/>
    } 
  }

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{name: 'Main'}}
        renderScene={ this.renderScene } 
      />       
    );
  }
};



class TabbedApp extends Component {
// tabbed part of the app, everything after user is signed in
constructor(props) {
  super(props);
  this.state = {selectedTab:'roam'};
}

renderScene (route, navigator) {

    if(route.name === 'Confirmation') {
      return <Confirmation navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Pending') {
      return <Pending navigator={navigator} {...route.passProps}/>
    }
    
    if(route.name === 'Dte') {
      return <Dte navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Host') {
      return <Host navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Join') {
      return <Join navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'EnrollConfirmation') {
      return <EnrollConfirmation navigator={navigator} {... route.passProps}/>
    }
    if(route.name === 'Time') {
      return <Time navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'XMain') {
      return <XMain navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'X') {
      return <X navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'Location') {
      return <Location navigator={navigator} {...route.passProps}/>
    }
    if(route.name === 'JoinPool') {
      return <JoinPool navigator={navigator} {...route.passProps}/>
    }
}

  navigateTo(routeName, title) {
    return (
       <Navigator
      style={{flex: 1}}
      initialRoute={{name: routeName, title:title, passProps: {userEmail: this.props.userEmail}}}
      renderScene={ this.renderScene }
      navigationBar={
      <Navigator.NavigationBar 
      style={ styles.nav } 
      routeMapper={NavigationBarRouteMapper} />} 
      />
    )
  }

  render() {
    return (

      <TabBarIOS 
        selectedTab={this.state.selectedTab}
        translucent={true}
        // style={styles.navbar}
        >
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'roam'}
          // icon={require('./imgs/roam.png')}
          title="Roam"
          onPress={() => {
              this.setState({
                  selectedTab: 'roam',
              });
          }}>
          {this.navigateTo('Time', 'Home')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'pool'}
          // icon={require('./imgs/dollar.png')}
          title="Roam Pool"
          onPress={() => {
                this.setState({
                    selectedTab: 'pool',
                });
          }}>
          {this.navigateTo('JoinPool','Join')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'xMain'}
          // icon={require('./imgs/dollar.png')}
          title="Roam X"
          onPress={() => {
                this.setState({
                    selectedTab: 'xMain',
                });
          }}>
          {this.navigateTo('XMain', 'Shhhhh')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    // if(route.name === 'Time') {
    //    index = 0; 
    // }
    if(index > 0) { 
      return (
      <View style={styles.leftNavContainer}>  
        <TouchableHighlight
           underlayColor="black"
           onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButton }> {'\u2039'} </Text>
        </TouchableHighlight>  
          <TouchableHighlight
           underlayColor="black"
           onPress={() => { 
            if (index > 0 && route.name !== 'Time') { navigator.pop() } }}>
          <Text style={styles.leftNavText}> Back </Text>
        </TouchableHighlight>
      </View>
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
    return <Text style={ styles.navTitle }>{route.title}</Text>
  }
};


const styles = StyleSheet.create({
  // container:{
  //   flex: 1,
  //   backgroundColor: 'red'
  // },
  leftNavContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  leftNavButton: {
    fontSize: 40,
    position: 'relative',
    top: -2,
    color: '#08abdf'
  },
  leftNavText: {
    color: '#08abdf',
    position: 'relative',
    right: 15,
    top: 17,
    marginLeft: 0,
  },
  navTitle: {
    position: 'absolute',
    fontSize: 20,
    left: 153,
    marginTop: 12,
    marginLeft: 15
  
  }
});

AppRegistry.registerComponent('roam', () => roam);
