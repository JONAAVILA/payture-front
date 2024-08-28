import axios from 'axios';
import { URL_CHECK_EMAIL } from '@env';

const ValidateEmail = async (values)=>{
    const access = await axios.post(URL_CHECK_EMAIL,{email:values.email})
    return access.data
}

export default ValidateEmail