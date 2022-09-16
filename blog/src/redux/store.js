import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {commentsReducer, listingsReducer, postReducer} from './reducer';
const reducer = combineReducers({
    listings: listingsReducer,
    post: postReducer,
    comments: commentsReducer
});
const store = createStore(
  reducer, applyMiddleware(thunk)
)
export default store;