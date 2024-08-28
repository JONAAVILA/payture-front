import { URL_CREATE_USER } from '@env';
import axios from 'axios';

const CreateUser = async (values)=>{
    const user = await axios.post(URL_CREATE_USER,values)
    return user
}

export default CreateUser