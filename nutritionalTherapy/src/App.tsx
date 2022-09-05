import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Colors } from './theme';

const navTheme = {
  ...DefaultTheme,
  colors: { background: Colors.white },
} as Theme;

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <SafeAreaView />
    </NavigationContainer>
  );
};

export default App;
