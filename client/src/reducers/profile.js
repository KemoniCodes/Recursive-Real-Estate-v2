import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, IS_AGENT } from "../actions/types";



const initialState = {
    profile: null,
    agent: null,
    loading: true,
    error: {},
    saves: [],
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
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            }
        default:
            return state;
    }
}

