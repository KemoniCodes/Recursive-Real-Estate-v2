import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    GET_PROFILES,
    GET_AGENT_PROFILES,
    PROFILE_ERROR,
    IS_AGENT,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_PROPERTY,
    GET_PROPERTIES
} from './types';


//Get all properties
export const getProperties = () => async dispatch => {
    try {
        const res = await axios.get('/api/property');

        dispatch({
            type: GET_PROPERTIES,
            payload: res.data,
        });

        console.log(res.data)
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


