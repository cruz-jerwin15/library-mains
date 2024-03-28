import { combineReducers } from 'redux';
import { libraryReducer,selectedStudentReducer } from './libraryReducers';

const reducers = combineReducers({
    allStudents:libraryReducer,
    singleStudent:selectedStudentReducer,
    
  
});

export default reducers;