import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    IS_AGENT,
    // NOT_AGENT
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


        // console.log(res.data.agent)

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, staus: err.response.status }
        });
    }
};

//Check if user is an Agent
// export const isAgent = () => async dispatch => {
//     try {
//         const res = await axios.get('/api/profile/me');

//         dispatch({
//             type: IS_AGENT,
//             payload: res.data.agent
//         });


//     } catch (err) {
//         dispatch({
//             type: NOT_AGENT,
//             payload: { msg: err.response.statusText, staus: err.response.status }
//         });
//     }
// };