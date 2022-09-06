import { gql } from '@apollo/client';
import { BaseRecipePayload } from '../fragments/baseRecipe';

export const GET_LIST_RECIPES = gql`
  query GetRecipes {
    listRecipes @client
  }
`;

export type RecipesRes = {
  listRecipes: [BaseRecipePayload];
};
