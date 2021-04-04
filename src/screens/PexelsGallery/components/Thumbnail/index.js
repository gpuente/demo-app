import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';

import { BORDER_WIDTH, IMAGE_SIZE, SPACING } from '../../constants';

const Thumbnail = ({ highlight, imageUrl, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={{ uri: imageUrl }}
      style={{
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: 12,
        marginRight: SPACING,
        borderWidth: BORDER_WIDTH,
        borderColor: highlight ? 'white' : 'transparent',
      }}
    />
  </TouchableOpacity>
);

Thumbnail.defaultProps = {
  highlight: false,
};

Thumbnail.propTypes = {
  highlight: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Thumbnail;
