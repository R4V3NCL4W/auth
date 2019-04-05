import React, { Component } from 'react';
import { View } from 'react-native';
import LoginFormComponent from '../components/LoginFormComponent/LoginFormComponent';

class Input extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <View>
        <LoginFormComponent
          username={this.state.username}
          usernameChanged={value => this.setState({ username: value })}
          password={this.state.password}
          passwordChanged={value => this.setState({ password: value })}
        />
      </View>
    );
  }
}

export default Input;
