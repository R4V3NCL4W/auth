import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Input, Button } from '../UI/UI';

class LoginFormComponent extends Component {
  render() {
    return (
      <View>
        <Input
          placeholder="username"
          label="Username"
          value={this.props.username}
          onChangeText={this.props.usernameChanged}
        />
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.props.password}
          onChangeText={this.props.passwordChanged}
        />
        <Button
          onPress={() => null}
          label="Login"
        />
      </View>
    );
  }
}

LoginFormComponent.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  usernameChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
};

export default LoginFormComponent;
