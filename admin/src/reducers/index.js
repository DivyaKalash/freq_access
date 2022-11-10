import userReducer from "./user";
import authReducer from "./auth";
import registeredusersReducer from "./registeredusers";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
    
    user: userReducer,
    auth: authReducer,
    registeredusers: registeredusersReducer
    
});

export default rootReducer;
