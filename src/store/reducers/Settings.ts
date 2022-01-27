import { TYPE_REDUCER } from '../../utils/constants';

export type initialStateT = {
  example: any;
};
const initialState: initialStateT = {
  example: 'this is state data',
};

const Settings = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE_REDUCER.EXAMPLE_ACTION:
      return {
        ...state,
        example: action.payload,
      };
    default:
      return state;
  }
};
export default Settings;
