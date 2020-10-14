export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return {
        ...state,
        state: action.data,
      };
    }
    case "DEL_TRANSACTION": {
      return { ...state, transDescription: "", transAmount: "" };
    }
  }
};
