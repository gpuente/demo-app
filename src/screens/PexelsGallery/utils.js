import { Dimensions } from 'react-native';
import { IMAGE_SIZE, SPACING } from './constants';

const { width } = Dimensions.get('screen');

const screenCenterPosition = width / 2;
const thumbImageSize = IMAGE_SIZE + SPACING;

export const isThumbnailOutOfCenter = (index) => {
  const thumbCenterPosition = ((index * thumbImageSize) + thumbImageSize) - (IMAGE_SIZE / 2);

  return (thumbCenterPosition > screenCenterPosition);
};

export const getThumbnailCenterOffset = (index) => {
  const offset = ((index * thumbImageSize) - screenCenterPosition + SPACING) + (IMAGE_SIZE / 2);
  return offset;
};
