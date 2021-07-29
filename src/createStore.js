import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers/index";
import ReduxThunk from "redux-thunk";

export const middleWares = [ReduxThunk];
export const createStoreWithMiddleWare = applyMiddleware(...middleWares)(
  createStore
);
export const store = createStoreWithMiddleWare(RootReducer);
