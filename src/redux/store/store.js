import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/index";
import filterMiddleware from '../middleware/filterMiddleware';
import updateHashMiddleware from '../middleware/updateHashMiddleware';

const store = createStore(reducers, applyMiddleware(filterMiddleware, updateHashMiddleware));

export default store;