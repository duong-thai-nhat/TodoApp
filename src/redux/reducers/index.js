import tasksReducer from './tasks.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

export default rootReducer;