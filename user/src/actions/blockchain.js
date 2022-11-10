import axios from "axios";

import { accessFreqConstants, checkAccessConstants } from "./constants";
 
export const checkAccess = (id)=>{
    return async (dispatch) => {
        dispatch({type: checkAccessConstants.CHECK_ACCESS_REQUEST});
        const res = await axios.post("http://localhost:5000/checkaccess", {
            ...id
        });
        console.log(res);
        if(res.status == 200){
            dispatch({type: checkAccessConstants.CHECK_ACCESS_SUCCESS});
            return true;
        }
        else{
            dispatch({
                type: checkAccessConstants.CHECK_ACCESS_FAILURE
            });
            return false;
        }
    }
}
export const accessFreq = (freq)=>{
    return async (dispatch) => {
        dispatch({type: accessFreqConstants.ACCESS_FREQ_REQUEST});
        const res = await axios.post("http://127.0.0.1:2707/get_freqblock", {
     ...freq
    } );
    console.log(res);
    if(res.status === 201){
        // const {message} = res.data;
        // console.log(message);
        dispatch({
            type: accessFreqConstants.ACCESS_FREQ_SUCCESS,
            payload: {
                message: res.data.message
            },
        });
        
    }
    else{
        dispatch({
            type: accessFreqConstants.ACCESS_FREQ_FAILURE,
            payload: {
                error: "Something wrong happened!"

            },
        });
        
    }
    }
}