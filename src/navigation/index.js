import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  BlurCarousel,
  PexelsGallery,
  AnimatedPicker,
} from '../screens';

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
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PexelsGallery"
      component={PexelsGallery}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="AnimatedPicker"
      component={AnimatedPicker}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
