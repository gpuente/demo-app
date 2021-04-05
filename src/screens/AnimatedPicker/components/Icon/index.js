import React from 'react';
import PropTypes from 'prop-types';
import { SimpleLineIcons } from '@expo/vector-icons';

import { ICON_SIZE } from '../../constants';

const Icon = ({ icon, color }) => (
  <SimpleLineIcons name={icon} color={color} size={ICON_SIZE} />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default React.memo(Icon);
