import { URL_CREATE_USER } from '@env';
import axios from 'axios';
import { getJwt } from '../utils/jwtStorage';

const PostUser = async (valuesUser)=>{
    const token = await getJwt()

    const config = {
            headers:{
                'Authorazation': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }

    const response = await axios.post(
        URL_CREATE_USER,
        valuesUser,
        config
    )
    return response.data
}

export default PostUser