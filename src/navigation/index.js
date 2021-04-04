import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PexelsGallery, BlurCarousel, Home } from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
    />
    <Stack.Screen
      name="BlurCarousel"
      component={BlurCarousel}
    />
    <Stack.Screen
      name="PexelsGallery"
      component={PexelsGallery}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
