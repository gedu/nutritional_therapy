import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList } from 'react-native';
import {
  GET_LIST_RECIPES,
  RecipesRes,
} from '../../common/datasources/remotesource/query/getListRecipes';
import { RecipeListItem } from './RecipeListItem';

export const RecipeList = () => {
  const { data } = useQuery<RecipesRes>(GET_LIST_RECIPES);
  // todo: add empty state
  return (
    <FlatList data={data?.listRecipes} renderItem={RecipeListItem} horizontal />
  );
};
