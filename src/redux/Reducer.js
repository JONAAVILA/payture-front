import { UPLOAD_USER_EMAIL } from './ActionsTypes';

const initialState = {
    user: {
      name:'',
      surname:'',
      userName:'',
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
        default:
            return state;
    }
}

export default rootReducer;