import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { BaseRecipePayload } from '../../common/datasources/remotesource/fragments/baseRecipe';
import {
  GET_LIST_RECIPES,
  RecipesRes,
} from '../../common/datasources/remotesource/query/getListRecipes';
import { RecipeListItem } from './RecipeListItem';

export const RecipeList = () => {
  const { data } = useQuery<RecipesRes>(GET_LIST_RECIPES);
  // todo: add empty state
  const handleRenderItem: ListRenderItem<BaseRecipePayload> = ({ item }) => {
    return <RecipeListItem recipe={item} />;
  };
  return (
    <FlatList
      data={data?.listRecipes}
      renderItem={handleRenderItem}
      horizontal
    />
  );
};
