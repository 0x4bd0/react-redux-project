import { conmbineReducers } from 'redux'

const rootReducer = conmbineReducers({
    books: booksReducer
})


export default rootReducer