import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Input from './containers/LoginForm';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDJ_i-Git9sSmNgsOJLcyNEOudcNvD16cg',
      authDomain: 'authentication-2b7b4.firebaseapp.com',
      databaseURL: 'https://authentication-2b7b4.firebaseio.com',
      projectId: 'authentication-2b7b4',
      storageBucket: 'authentication-2b7b4.appspot.com',
      messagingSenderId: '364717112432',
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Input />
      </View>
    );
  }
}
