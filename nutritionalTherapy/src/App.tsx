import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import { AppRoutes } from './router';
import { Colors } from './theme';

const navTheme = {
  ...DefaultTheme,
  colors: { background: Colors.white },
} as Theme;

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
