import { configureStore } from '@reduxjs/toolkit'
import photoReducers from 'features/Photo/Slice'

const rootReducer = {
    photos : photoReducers,
}

const store = configureStore({
    reducer : rootReducer,
})
export default store;