import { accessFreqConstants, checkAccessConstants } from "../actions/constants";

const initState = {
    loading: false,
    error: "",
    message: "",
    access: false,
    clicked: false
};

export default (state = initState, action) => {
    switch(action.type){
        case accessFreqConstants.ACCESS_FREQ_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case accessFreqConstants.ACCESS_FREQ_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message,
                
            };
            break;
        case accessFreqConstants.ACCESS_FREQ_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
                
            };
            break;
        case checkAccessConstants.CHECK_ACCESS_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case checkAccessConstants.CHECK_ACCESS_SUCCESS:
            state = {
                ...state,
                access: true,
                loading: false,
                clicked: true
            };
            break;
        case checkAccessConstants.CHECK_ACCESS_FAILURE:
            state = {
                ...state, access:false,
                
                loading: false,
                clicked: true

            };
            break;
        
    }
    return state;
}