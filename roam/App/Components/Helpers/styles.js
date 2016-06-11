'use strict';

import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  leftNavButtonText: {
    fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef'
  },
  navTitle: {
    marginTop:4,
    fontSize:16
  },
  title: {
    marginBottom: 20,
    fontSize: 70,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 5
  },
  header: {
    marginBottom: 20,
    fontSize: 50,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },

  submit: {
    height: 50,   
    padding: 10,
    marginRight: 5,
    marginBottom: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },

  smallSubContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'flex-start',
    position: 'relative'
  },

  smallSubmit: {
    height: 50,
    width: 150,
    padding: 10,
    marginRight: 5,
    marginBottom: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },

  desc: {
    height: 50,
    padding: 10,
    marginRight: 5,
    marginBottom: 175,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'

  },

  bigInput: {
      height: 150,
      padding: 10,
      marginRight: 5,
      marginBottom: 75,
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
    },

  hostContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 0,
  },

  dateViewBox: {
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    position: 'relative'

  },

  dateViewLabel: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },

  dateViewTime: {
    marginBottom: 10,
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 2
  },

  dateViewDate: {
    marginBottom: 10,
    marginLeft: 28,
    fontSize: 20,
    fontWeight: "100",
    textAlign: 'right',
    color: 'white',
    backgroundColor: 'transparent'
  },

  dateContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },

  datePicker: {
    borderTopWidth: 1,
    position: 'relative', 
    marginBottom: 70,  
    borderColor: '#fff', 
    height: 220,
    bottom: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.3)'
  },

  datePickerLabel: {
    textAlign: 'right'
  },

  locViewBox: {
    backgroundColor: 'transparent',
    position: 'relative',
    marginBottom: 10,
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  locViewLabel: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },

  locViewDate: {
    marginBottom: 10,
    marginLeft: 28,
    fontSize: 20,
    fontWeight: "100",
    textAlign: 'right',
    color: 'white',
    backgroundColor: 'transparent'
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    backgroundColor: '#ff0066',
    borderRadius:10,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  signUpButton: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 18
  },
  unselected: {
    fontSize: 20,
    backgroundColor: 'orange',
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  selected: {
    fontSize: 20,
    backgroundColor: 'green',
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex:1,
    width:null,
    height: null,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  errorMessage: {
    backgroundColor: 'transparent',
    color: '#ff0066',
    textAlign: 'center',
    fontSize: 20,
    marginTop: -23
  },
  confirmation: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 25,
    paddingBottom: 10
  },
  startRoam: {
    position: 'absolute',
    bottom: 0,
    left: 22
  },
  location: {
    backgroundColor: 'transparent',
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  navbar: {},
  container: {
    marginTop: -50
  }
});

module.exports = styles;
