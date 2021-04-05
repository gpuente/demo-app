import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '../Icon';
import { ITEM_HEIGHT } from '../../constants';

const Item = ({ icon, color, name, showText }) => (
  <View style={styles.root}>
    {showText ? (
      <Text style={[styles.text, { color }]}>{name}</Text>
    ) : (
      <View />
    )}
    <Icon icon={icon} color={color} />
  </View>
)

const styles = StyleSheet.create({
  root: {
    height: ITEM_HEIGHT,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 26,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
});

Item.defaultProps = {
  showText: false,
};

Item.propTypes = {
  showText: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default React.memo(Item);
