import { applyMiddleware, combineReducers, createStore } from "redux";

import ContactosReducer from "./contactos.reducer";
import thunk from "redux-thunk";

// reducers

const RootReducer = combineReducers({
  contactos: ContactosReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
