import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { BaseRecipePayload } from '../../common/datasources/remotesource/fragments/baseRecipe';
import { NavigationProps } from '../../router';
import { styles } from './RecipeList.style';

type RecipeListItemProps = {
  recipe: BaseRecipePayload;
};

export const RecipeListItem = ({ recipe }: RecipeListItemProps) => {
  const navigation = useNavigation<NavigationProps['Home']>();
  const imagePlaceholder = recipe.images.url;
  const handleMealPress = () => {
    navigation.navigate('Details', {
      title: recipe.title,
      headerImage: imagePlaceholder,
      description: recipe.description,
      ratingPoints: recipe.rating,
    });
  };
  return (
    <TouchableOpacity style={styles.card} onPress={handleMealPress}>
      <Image
        style={styles.cardImage}
        source={{ uri: imagePlaceholder }}
        resizeMode="cover"
      />
      <Text style={styles.cardTitle} numberOfLines={2}>
        {recipe.title}
      </Text>
    </TouchableOpacity>
  );
};
