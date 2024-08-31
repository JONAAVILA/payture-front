import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer.js';
import { composeWithDevTools } from 'redux-devtools-expo-dev-plugin/build/devtools.js';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
