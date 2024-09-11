import axios from 'axios';
import { URL_CHECK_EMAIL } from '@env';
import { saveJwt } from '../utils/jwtStorage';

const ValidateEmail = async (email)=>{
    try {
        const res = await axios.post(URL_CHECK_EMAIL,{email:email})
        const token = res.data
        
        if(token === false) return false
        const save = await saveJwt(token)

        if(save) return true
    } catch (error) {
        console.log('validateEmail:',{error:error.message})
    }
}

export default ValidateEmail