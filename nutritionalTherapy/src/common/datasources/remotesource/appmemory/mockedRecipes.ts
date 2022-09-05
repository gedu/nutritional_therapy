import { makeVar } from '@apollo/client';
import casual from 'casual-browserify';
import { BaseRecipePayload } from '../fragments/baseRecipe';

//todo: add more image urls
const recipes = casual.array_of_integers(10).map<BaseRecipePayload>(() => ({
  description: casual.description,
  id: casual.uuid,
  images: {
    url: 'https://images.unsplash.com/photo-1518510227856-30619d542ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640',
  },
  rating: casual.double(1, 5).toFixed(1),
  time: `${casual.integer(10, 60)}`,
  title: casual.title,
}));

export const mockedRecipes = makeVar(recipes);
