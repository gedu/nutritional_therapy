import { gql } from '@apollo/client';

export const GET_LIST_RECIPES = gql`
  query GetRecipes {
    listRecipes @client
  }
`;
