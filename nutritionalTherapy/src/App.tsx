import { ApolloProvider } from '@apollo/client';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import { client } from './common/datasources/remotesource';
import { AppRoutes } from './router';
import { Colors } from './theme';

const navTheme = {
  ...DefaultTheme,
  colors: { background: Colors.white },
} as Theme;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={navTheme}>
        <AppRoutes />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
