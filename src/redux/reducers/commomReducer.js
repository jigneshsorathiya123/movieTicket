import { COLOR_PICKER_SET } from '../actiontypes/CommonTypes';
const initialState = {
  colorrdata: 'green',
};
export default function commomReducer(state = initialState, action) {
  switch (action.type) {
    case COLOR_PICKER_SET:
      return {
        ...state,
        colorrdata: action.colorrdata,
      };

    default: {
      return state;
    }
  }
}
