import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/navigation';

const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default App;
