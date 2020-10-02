import { GET_PROFILE, PROFILE_ERROR, IS_AGENT } from "../actions/types";



const initialState = {
    profile: null,
    agent: null,
    loading: true,
    error: {}
};


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case IS_AGENT:
            return {
                ...state,
                agent: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}

