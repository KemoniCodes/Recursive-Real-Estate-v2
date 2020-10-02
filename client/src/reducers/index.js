import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth'
import profile from './profile'
import agent from './profile';

export default combineReducers({
    alert, 
    auth,
    profile,
    agent
});