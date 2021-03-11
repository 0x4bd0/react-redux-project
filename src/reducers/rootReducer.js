import { conmbineReducers } from 'redux'
import booksReducer from './bookReducer'


const rootReducer = conmbineReducers({
    books: booksReducer
})


export default rootReducer