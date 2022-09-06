import { makeVar } from '@apollo/client';
import casual from 'casual-browserify';
import { urlImages } from '../../../utils/casualImages';
import { BaseRecipePayload } from '../fragments/baseRecipe';

casual.define('images', () => {
  return casual.random_element(urlImages);
});

const recipes = casual.array_of_integers(10).map<BaseRecipePayload>(() => ({
  description: casual.description,
  id: casual.uuid,
  images: {
    url: casual.images,
  },
  rating: casual.double(1, 5).toFixed(1),
  time: `${casual.integer(10, 60)}`,
  title: casual.title,
}));

export const mockedRecipes = makeVar(recipes);
