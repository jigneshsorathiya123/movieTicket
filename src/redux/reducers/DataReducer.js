import { DATA_DETAILES_TYPE } from "../actiontypes/DataTypes";
const initialState = {
  Detailedata: []
};
export default function DataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_DETAILES_TYPE:
      return {
        ...state,
        Detailedata: action.data,
      };

    default: {
      return state;
    }
  }
}