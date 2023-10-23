import { getQuestions } from '../api/fetch-flags';

export const getTrivia = ( region, qQuestions ) => {
  const countries = getQuestions(region);
  return countries;
}