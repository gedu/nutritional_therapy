import React from 'react';
import { Image, ListRenderItem, Text, View } from 'react-native';
import { MealPlanPayload } from '../../common/datasources/remotesource/fragments/baseMeals';
import { styles } from './MealList.style';

export const MealListItem: ListRenderItem<MealPlanPayload> = ({ item }) => {
  const imagePlaceholder = item.schedule.lunch.recipesDetails.images.url;

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          style={styles.cardImage}
          source={{ uri: imagePlaceholder }}
          resizeMode="contain"
        />
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardAuthor}>{item.author}</Text>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </View>
    </View>
  );
};
