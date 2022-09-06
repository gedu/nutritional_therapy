import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MealPlanPayload } from '../../common/datasources/remotesource/fragments/baseMeals';
import { NavigationProps } from '../../router';
import { styles } from './MealList.style';

type MealListItemProps = {
  meal: MealPlanPayload;
};

export const MealListItem = ({ meal }: MealListItemProps) => {
  const navigation = useNavigation<NavigationProps['Home']>();
  const imagePlaceholder = meal.schedule.lunch.recipesDetails.images.url;
  const handleMealPress = () => {
    navigation.navigate('Details', {
      title: meal.title,
      headerImage: imagePlaceholder,
      description: meal.description,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleMealPress}>
      <View style={styles.cardContent}>
        <Image
          style={styles.cardImage}
          source={{ uri: imagePlaceholder }}
          resizeMode="contain"
        />
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardAuthor}>{meal.author}</Text>
          <Text style={styles.cardTitle}>{meal.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
