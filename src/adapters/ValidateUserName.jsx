import axios from 'axios';
import { URL_CHECK_USER } from '@env';

const ValidateUserName = async (userName)=>{
    const check = await axios.post(URL_CHECK_USER,{userName:userName})
    return check.data
}

export default ValidateUserName