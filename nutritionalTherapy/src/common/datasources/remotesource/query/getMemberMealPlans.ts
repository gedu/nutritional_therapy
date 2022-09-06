import { gql } from '@apollo/client';
import { MealPlanPayload } from '../fragments/baseMeals';

export const GET_MEMBER_MEAL_PLANS = gql`
  query GetMemberMealPlans {
    memberMealplans @client
  }
`;

export type MemberMealPlansRes = {
  memberMealplans: [MealPlanPayload];
};
