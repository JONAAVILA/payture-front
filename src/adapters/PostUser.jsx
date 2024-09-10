import { URL_CREATE_USER } from '@env';
import axios from 'axios';
import StateUser from '../utils/states/StateUser';

const PostUser = async ()=>{
    const user = StateUser()

    console.log('user:',user)
    const response = await axios.post(URL_CREATE_USER,user)
    console.log('response:',response)
    return response.data
}

export default PostUser