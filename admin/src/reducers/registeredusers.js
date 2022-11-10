import { registeredUserConstants } from "../actions/constants";

const initialState = {
    loading: false,
    userList: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case registeredUserConstants.GET_REGISTEREDUSERS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case registeredUserConstants.GET_REGISTEREDUSERS_SUCCESS:
            state = {
                ...state,
                userList: action.payload,
                loading: false
            }
            break;
        case registeredUserConstants.GET_REGISTEREDUSERS_FAILURE:
            state = {
                ...state,loading: false
            }
            break;
    }
    return state;
}