import { todoReducer } from "./todo/reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleWare();

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
