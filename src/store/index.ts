import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import { appReducer, initialState } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];
const composeEnhancers = composeWithDevTools;

export const store = createStore(
    appReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);
