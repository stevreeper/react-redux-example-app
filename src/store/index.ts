import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "./sagas";
import { TodoReducer } from "./todo";

const sagaMiddleware = createSagaMiddleWare();

const rootReducer = combineReducers({
  todo: TodoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
