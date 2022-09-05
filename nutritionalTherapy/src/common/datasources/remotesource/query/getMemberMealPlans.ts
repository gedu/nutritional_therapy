import { gql } from '@apollo/client';

export const GET_MEMBER_MEAL_PLANS = gql`
  query GetMemberMealPlans {
    memberMealplans @client
  }
`;
