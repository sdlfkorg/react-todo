import {combineReducers} from 'redux';
import todolistReducer from './reducer-todo-list';
const rootReducer = combineReducers({
  totoList: todolistReducer
});

export default rootReducer;