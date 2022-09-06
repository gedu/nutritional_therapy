import React from 'react';
import { Image, Text, View } from 'react-native';
import { starIcon } from '../../../assets/images';
import { styles } from '../DetailsPage.style';

type RatingSectionProps = {
  points?: string;
};

export const RatingSection = ({ points }: RatingSectionProps) => {
  if (!points) {
    return null;
  }

  return (
    <View style={styles.starContainer}>
      <Image style={styles.starIcon} source={starIcon} resizeMode="cover" />
      <Text style={styles.ratingTitle}>{points}</Text>
    </View>
  );
};
