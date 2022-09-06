import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './HomePage.style';
import { MealList } from './meal-list/MealList';
import { RecipeList } from './recipe-list/RecipeList';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.headerTitle}>
        {t('goodMorningName', { name: 'Christine' })}
      </Text>
      <MealList />
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeTitle}>{t('recipesForYou')}</Text>
        <RecipeList />
      </View>
    </SafeAreaView>
  );
};
