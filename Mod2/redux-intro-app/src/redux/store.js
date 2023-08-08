import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todosSlice';

// The current Redux application state lives in an object called the store.
export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    }
});