import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  routing: routerReducer
})

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //eslint-disable-line
  applyMiddleware(thunk),
);

export default store;