import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const FullScreenImage = ({ imageUrl }) => (
  <View style={{ width, height }}>
    <Image
      source={{ uri: imageUrl }}
      style={[StyleSheet.absoluteFillObject]}
    />
  </View>
);

FullScreenImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default FullScreenImage;
