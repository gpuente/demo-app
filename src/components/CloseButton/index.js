import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const CloseButton = (props) => {
  const { style, onPress } = props;

  return (
    <View style={[styles.root, style]}>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Ionicons
          size={25}
          color="white"
          name="md-close"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

CloseButton.defaultProps = {
  style: {},
};

CloseButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
};

export default CloseButton;
