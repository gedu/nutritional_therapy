import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { MealPlanPayload } from '../../common/datasources/remotesource/fragments/baseMeals';
import {
  GET_MEMBER_MEAL_PLANS,
  MemberMealPlansRes,
} from '../../common/datasources/remotesource/query/getMemberMealPlans';
import { MealListItem } from './MealListItem';

export const MealList = () => {
  const { data } = useQuery<MemberMealPlansRes>(GET_MEMBER_MEAL_PLANS);
  // todo: add empty state
  const handleRenderItem: ListRenderItem<MealPlanPayload> = ({ item }) => {
    return <MealListItem meal={item} />;
  };
  return (
    <FlatList
      data={data?.memberMealplans}
      renderItem={handleRenderItem}
      horizontal
    />
  );
};
