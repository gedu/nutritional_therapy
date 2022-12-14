import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import { DetailsPage } from '../details/DetailsPage';
import { HomePage } from '../home/HomePage';
import { SplashPage } from '../splash/SplashPage';

export const RouteName = {
  splash: 'Splash',
  home: 'Home',
  details: 'Details',
} as const;

export type StackParams = {
  [RouteName.splash]: undefined;
  [RouteName.home]: undefined;
  [RouteName.details]: {
    description: string;
    headerImage: string;
    ratingPoints?: string;
    title: string;
  };
};

export type NavigationProps = {
  [RouteName.splash]: NativeStackScreenProps<
    StackParams,
    'Splash'
  >['navigation'];
  [RouteName.home]: NativeStackScreenProps<StackParams, 'Home'>['navigation'];
  [RouteName.details]: NativeStackScreenProps<StackParams, 'Details'>;
};

const Stack = createNativeStackNavigator<StackParams>();
const mainOptions = {
  headerShown: false,
};

type AppRoutesProps = {
  initialScreen?: keyof typeof RouteName;
};

export const AppRoutes = ({ initialScreen = 'splash' }: AppRoutesProps) => {
  return (
    <Stack.Navigator
      screenOptions={mainOptions}
      initialRouteName={RouteName[initialScreen]}>
      <Stack.Screen name={RouteName.splash} component={SplashPage} />
      <Stack.Screen name={RouteName.home} component={HomePage} />
      <Stack.Screen name={RouteName.details} component={DetailsPage} />
    </Stack.Navigator>
  );
};
