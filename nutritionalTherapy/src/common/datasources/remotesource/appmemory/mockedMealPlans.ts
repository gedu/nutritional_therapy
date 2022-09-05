import { makeVar } from '@apollo/client';
import casual from 'casual-browserify';
import { MealPlanPayload } from '../fragments/baseMeals';

//todo: add more image urls
const plans = casual.array_of_integers(10).map<MealPlanPayload>(() => ({
  author: casual.full_name,
  description: casual.description,
  id: casual.uuid,
  isMembersOnly: casual.coin_flip as boolean,
  schedule: {
    dinner: {
      active: true,
      recipesDetails: {
        id: casual.uuid,
        images: {
          url: 'https://images.unsplash.com/photo-1518510227856-30619d542ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640',
        },
        title: casual.title,
      },
    },
    lunch: {
      active: true,
      recipesDetails: {
        id: casual.uuid,
        images: {
          url: 'https://images.unsplash.com/photo-1518510227856-30619d542ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640',
        },
        title: casual.title,
      },
    },
    name: casual.title,
  },
  title: casual.title,
}));

export const mockedMealPlans = makeVar(plans);
