export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      console.log("reducer called", "values are: ", action.data);
      return [...state, action.data];
    }
    case "DEL_TRANSACTION": {
      return { ...state, transDescription: "", transAmount: "" };
    }
  }
};
