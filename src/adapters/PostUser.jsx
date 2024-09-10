import { URL_CREATE_USER } from '@env';
import axios from 'axios';

const PostUser = async (valuesUser)=>{
    const response = await axios.post(URL_CREATE_USER,valuesUser)
    return response.data
}

export default PostUser