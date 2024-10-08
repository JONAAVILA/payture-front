import { UPLOAD_USER_EMAIL } from './ActionsTypes';

export const updateUserEmail = (email)=>{
    return (dispatch)=>{
        return dispatch({
            type: UPLOAD_USER_EMAIL,
            payload:email
        })
    }
}

export const updateUser = (values)=>{
    return (dispatch)=>{
        console.log('action:',values)
        return dispatch({
            type:UPLOAD_USER,
            payload:values
        })
    }
}