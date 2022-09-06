import { makeVar } from '@apollo/client';
import casual from 'casual-browserify';
import { urlImages } from '../../../utils/casualImages';
import { MealPlanPayload } from '../fragments/baseMeals';

casual.define('images', () => {
  return casual.random_element(urlImages);
});

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
          url: casual.images,
        },
        title: casual.title,
      },
    },
    lunch: {
      active: true,
      recipesDetails: {
        id: casual.uuid,
        images: {
          url: casual.images,
        },
        title: casual.title,
      },
    },
    name: casual.title,
  },
  title: casual.title,
}));

export const mockedMealPlans = makeVar(plans);
