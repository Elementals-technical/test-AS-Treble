import { TYPE_REDUCER } from '../../utils/constants';

export const ExampleAction = (data: string) => ({
  type: TYPE_REDUCER.EXAMPLE_ACTION,
  payload: data,
});
