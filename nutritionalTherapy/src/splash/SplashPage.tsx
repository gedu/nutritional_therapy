import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, Text, View } from 'react-native';
import { NavigationProps } from '../router';
import { Colors } from '../theme';
import { styles } from './SplashPage.style';

type SplashPageProps = {
  navigation: NavigationProps['Splash'];
};

export const SplashPage = ({ navigation }: SplashPageProps) => {
  const { t } = useTranslation();
  useEffect(() => {
    // Simulating fetching or some data loading
    const cancelId = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
    return () => {
      clearTimeout(cancelId);
    };
  }, [navigation]);
  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Text style={styles.title}>{t('splashTitle')}</Text>
      <LottieView
        style={styles.animationItem}
        source={require('../../assets/anims/health_splash.json')}
        autoPlay
        loop
      />
    </View>
  );
};
