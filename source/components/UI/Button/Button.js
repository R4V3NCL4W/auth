import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ButtonStyles';

const button = props => (
  <View>
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.button}
      >
        <Text style={styles.label}>
          {props.label}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export { button as Button };
