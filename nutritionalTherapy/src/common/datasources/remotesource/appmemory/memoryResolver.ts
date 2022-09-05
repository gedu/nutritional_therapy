import { InMemoryCache } from '@apollo/client';
import { mockedMealPlans } from './mockedMealPlans';
import { mockedRecipes } from './mockedRecipes';

export const memCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        listRecipes: {
          read() {
            return mockedRecipes();
          },
        },
        memberMealplans: {
          read() {
            return mockedMealPlans();
          },
        },
      },
    },
  },
});
