import { UPLOAD_USER_EMAIL, UPLOAD_USER } from './ActionsTypes';

const initialState = {
    user: {
      name:'',
      surname:'',
      userName:'',
      password:'',
      email:'',
    }
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPLOAD_USER_EMAIL:
          return {
            ...state,
            user:{
              ...state.user,
              email:action.payload
            }
          };
        case UPLOAD_USER:
          return {
            ...state,
            user:{
              ...state.user,
              name:action.payload.name,
              userName:action.payload.userName,
              password:action.payload.password
            }
          }
        default:
            return state;
    }
}

export default rootReducer;