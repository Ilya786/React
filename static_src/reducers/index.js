import { combineReducers } from 'redux';
import testReducer from './testReducer';
import messageReducer from './messageReducer';


export default combineReducers({
    testReducer,
    messageReducer,
});