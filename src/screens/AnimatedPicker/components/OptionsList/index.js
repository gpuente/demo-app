import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import Item from '../Item';
import { ITEM_HEIGHT, COLORS } from '../../constants';

const OptionsList = React.forwardRef((props, ref) => {
  const {
    data,
    color,
    showText,
    ...flatListProps
  } = props;

  return (
    <Animated.FlatList
      ref={ref}
      data={data}
      bounces={false}
      decelerationRate="fast"
      scrollEventThrottle={16}
      snapToInterval={ITEM_HEIGHT}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ name, icon }) => `${name}-${icon}`}
      renderItem={({ item }) => (
        <Item {...item} color={COLORS[color]} showText={showText} />
      )}
      {...flatListProps}
    />
  );
});


OptionsList.defaultProps = {
  color: 'yellow',
  showText: false,
};

OptionsList.propTypes = {
  showText: PropTypes.bool,
  color: PropTypes.oneOf(['yellow', 'dark']),
  data: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default OptionsList;
