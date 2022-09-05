import { gql } from '@apollo/client';

export const baseRecipe = gql`
  fragment BaseRecipe on Recipe {
    id
    title
    description
    rating
    time
    images {
      url
    }
  }
`;

export type BaseRecipePayload = {
  description: string;
  id: string;
  images: {
    url: string;
  };
  rating: string;
  time: string;
  title: string;
};
