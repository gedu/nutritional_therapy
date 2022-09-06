import React from 'react';
import { Animated, Image, Text } from 'react-native';
import { NavigationProps } from '../router';
import { styles } from './DetailsPage.style';
import { BackHeader } from './back-header/BackHeader';
import { RatingSection } from './rating-section/RatingSection';

type DetailsPageProps = {
  navigation: NavigationProps['Details']['navigation'];
  route: NavigationProps['Details']['route'];
};

export const DetailsPage = ({ navigation, route }: DetailsPageProps) => {
  const { title, description, headerImage, ratingPoints } = route.params;
  return (
    <>
      <BackHeader navigation={navigation} />
      <Animated.ScrollView>
        <Image
          style={styles.imageHeader}
          source={{ uri: headerImage }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{title}</Text>
        <RatingSection points={ratingPoints} />
        <Text style={styles.description}>{description}</Text>
      </Animated.ScrollView>
    </>
  );
};
