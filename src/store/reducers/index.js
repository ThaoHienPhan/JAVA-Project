import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import counterReducer from './counterReducer';
// import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  //   counter: counterReducer,
  //   todos: todosReducer,
});

export default rootReducer;
