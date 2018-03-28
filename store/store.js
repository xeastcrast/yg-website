import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  ui: {
    regDialog: false
  }
};

export const actionTypes = {
  UI_CHANGE: "UI_CHANGE"
};

//reducer
export const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.UI_CHANGE:
      return Object.assign({}, state, {
        ui: {
          ...state.ui,
          [actions.name]: actions.state
        }
      });
    default:
      return state;
  }
};

export const changeUiState = (action, dispatch) => {
  return dispatch({
    type: actionTypes.UI_CHANGE,
    name: action.name,
    state: action.state
  });
};

export const initStore = (initState = initialState) => {
  return createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
