import axios from "../helpers/axios";
import { grantUserConstants, registeredUserConstants } from "./constants";

export const registeredUsers = () =>{
    return async (dispatch) => {
        dispatch({ type: registeredUserConstants.GET_REGISTEREDUSERS_REQUEST});
        const res  = await axios.get("/getRegisteredUsers");
        console.log(res.data);
        if(res.status === 200){
            dispatch({
                type: registeredUserConstants.GET_REGISTEREDUSERS_SUCCESS,
                payload: res.data.userList
            });
        }else{
            dispatch({
                type: registeredUserConstants.GET_REGISTEREDUSERS_FAILURE,
                payload: "something went wrong"
            });
        }
    }
}

export const grantAccess = (user) =>{
    return async (dispatch)=>{
        dispatch({type: grantUserConstants.GRANT_USER_REQUEST});
        const res = await axios.post("/grantaccess", {
            ...user
        });

        if(res.status === 200){
            const {message} = res.data;

            dispatch({
                type: grantUserConstants.GRANT_USER_SUCCESS,
                payload: {
                    message
                }
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: grantUserConstants.GRANT_USER_FAILURE,
                    payload: {
                        error: res.data.error,
                    }
                });
            }
        }
    };
};

