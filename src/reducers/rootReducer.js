import { combineReducers } from 'redux'
import addBookReducer from './addBookReducer'
import booksReducer from './bookReducer'


const rootReducer = combineReducers({
    books: booksReducer,
    addBook: addBookReducer
})


export default rootReducer