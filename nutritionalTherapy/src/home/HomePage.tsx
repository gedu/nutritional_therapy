import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './HomePage.style';
import { MealList } from './meal-list/MealList';

export const HomePage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.headerTitle}>Good Morning, Christine</Text>

      <MealList />

      <View style={{ flex: 1 }} />
    </SafeAreaView>
  );
};
