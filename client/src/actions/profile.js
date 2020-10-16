import axios from 'axios';
import { setAlert } from './alert';


import {
    GET_PROFILE,
    GET_PROFILES,
    GET_AGENT_PROFILES,
    PROFILE_ERROR,
    IS_AGENT,
    CLEAR_PROFILE,
    ACCOUNT_DELETED

} from './types';



//Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });

        dispatch({
            type: IS_AGENT,
            payload: res.data.agent
        });


    } catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, staus: err.response.status }
        });
    };
};



//Get all profiles that are agents
export const getAgentProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get('/api/profile');
        const agent = res.data.map(obj => obj)
        const isTrue = agent.filter(function (person) {
            return person.agent == true;
          });
          
        dispatch({
            type: GET_AGENT_PROFILES,
            payload: isTrue
        });

        // dispatch({
        //     type: IS_AGENT,
        //     payload: res.data.agent
        // });

    } catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, staus: err.response.status }
        });
    };
};



//Get profile by ID
export const getProfileById = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/${userId}`);
        dispatch({
            type: GET_PROFILES,
            payload: res.data,
        });

        dispatch({
            type: IS_AGENT,
            payload: res.data.agent
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, staus: err.response.status }
        });
    };
};



//Create or update profile
export const createProfile = (fd, history, edit = false) => async dispatch => {
    try {

        const config = {
            header: {
                "Content-Type": "multipart/form-data"
            }
        };

        const res = await axios.post('/api/profile', fd, config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });


        dispatch({
            type: IS_AGENT,
            payload: res.data.agent
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));
        if (!edit) {
            history.push('/dashboard');
        }
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        };

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, staus: err.response.status }
        });
    }
};



//Delete Account and Profile
export const deleteAccount = id => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            const res = await axios.delete('/api/profile');

            dispatch({ type: CLEAR_PROFILE });
            dispatch({ type: ACCOUNT_DELETED });


            dispatch(setAlert('Your account has been permanantly deleted', 'danger'));
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, staus: err.response.status }
            });
        }
    }
};