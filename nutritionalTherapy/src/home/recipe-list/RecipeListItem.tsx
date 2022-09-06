import React from 'react';
import { Image, ListRenderItem, Text, View } from 'react-native';
import { BaseRecipePayload } from '../../common/datasources/remotesource/fragments/baseRecipe';
import { styles } from './RecipeList.style';

export const RecipeListItem: ListRenderItem<BaseRecipePayload> = ({ item }) => {
  const imagePlaceholder = item.images.url;

  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{ uri: imagePlaceholder }}
        resizeMode="cover"
      />
      <Text style={styles.cardTitle} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );
};
