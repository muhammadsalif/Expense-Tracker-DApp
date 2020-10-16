export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return [...state, action.data];
    }
    case "DEL_TRANSACTION": {
      return state.filter(
        (stateObj) => stateObj.transId !== action.data.transId
      );
    }
    default: {
      return state;
    }
  }
};
