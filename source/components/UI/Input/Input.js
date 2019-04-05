import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './InputStyles';

const input = props => (
  <View>
    <View>
      <Text style={styles.label}>
        {props.label}
      </Text>
      <View style={styles.container}>
        <TextInput
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          autoCorrect={props.autoCorrect}
          value={props.value}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  </View>
);

input.defaultProps = {
  label: '',
  secureTextEntry: false,
  placeholder: '',
  autoCorrect: false,
  keyboardType: 'default',
};

input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  autoCorrect: PropTypes.bool,
  label: PropTypes.string,
};

export { input as Input };
