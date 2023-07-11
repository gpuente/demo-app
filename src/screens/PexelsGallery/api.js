import Constants from 'expo-constants';

import { API_URL } from './config';

export const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: Constants.expoConfig.extra.PEXELS_API_KEY,
    },
  });

  console.log('>>>>>>>>>>>>>>>>data', data);
  const { photos } = await data.json();
  return photos;
};
