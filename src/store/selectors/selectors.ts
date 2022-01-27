import { initialStateT } from '../reducers/Settings';
export const getExampleAction = () => (state: any) => {
  const dataState: initialStateT = state.Configurations;
  const result = dataState.example;
  return result;
};
