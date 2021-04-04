import Constants from 'expo-constants';

import { API_URL } from './config';

export const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: Constants.manifest.extra.PEXELS_API_KEY,
    },
  });

  const { photos } = await data.json();
  return photos;
};
