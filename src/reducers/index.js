import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;


{/*we wire this to our application w/ combineReducers
  when we pass this object to combineReducers
  we tell Redux how to create our applications state.
  combineReducers function maps the books reducer.*/}
