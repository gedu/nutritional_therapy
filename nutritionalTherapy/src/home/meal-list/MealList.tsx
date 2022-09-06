import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList } from 'react-native';
import {
  GET_MEMBER_MEAL_PLANS,
  MemberMealPlansRes,
} from '../../common/datasources/remotesource/query/getMemberMealPlans';
import { MealListItem } from './MealListItem';

export const MealList = () => {
  const { data } = useQuery<MemberMealPlansRes>(GET_MEMBER_MEAL_PLANS);
  // todo: add empty state
  return (
    <FlatList
      data={data?.memberMealplans}
      renderItem={MealListItem}
      horizontal
    />
  );
};
