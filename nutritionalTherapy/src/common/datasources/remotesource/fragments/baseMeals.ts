import { gql } from '@apollo/client';

export const baseMeal = gql`
  fragment MealFragment on Meal {
    active
    recipesDetails {
      id
      title
      images {
        url
      }
    }
  }
`;

export const mealPlan = gql`
  ${baseMeal}
  fragment MealPlanFragment on Mealplan {
    id
    title
    author
    description
    isMembersOnly
    schedule {
      name
      dinner {
        ...MealFragment
      }
      lunch {
        ...MealFragment
      }
    }
  }
`;

export type MealPayload = {
  active: boolean;
  recipesDetails: {
    id: string;
    images: {
      url: string;
    };
    title: string;
  };
};

export type MealPlanPayload = {
  author: string;
  description: string;
  id: string;
  isMembersOnly: boolean;
  schedule: {
    dinner: MealPayload;
    lunch: MealPayload;
    name: string;
  };
  title: string;
};
