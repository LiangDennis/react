import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
// 中间件
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySagas from './sagas';
const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(thunk),applyMiddleware(sagaMiddleware));
// 仓库
const store = createStore(
  reducer, 
  enhancer, 
);
sagaMiddleware.run(mySagas);
export default store;
