import { UPLOAD_USER_EMAIL } from './ActionsTypes';

export const updateUserEmail = (email)=>{
    return (dispatch)=>{
        return dispatch({
            type: UPLOAD_USER_EMAIL,
            payload:email
        })
    }
}