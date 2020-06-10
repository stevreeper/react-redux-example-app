import { todoReducer } from "./todo/reducers";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
