import axios from 'axios';
import { URL_CHECK_USER } from '@env';
import { getJwt } from '../utils/jwtStorage';

const ValidateUserName = async (userName)=>{
    try {
        const token = await getJwt()

        const config = {
            headers:{
                'Authorazation': `Bearer ${token}`,
                'Content-Type':'application/json'
            }
        }
    
        const check = await axios.post(
            URL_CHECK_USER,
            {userName:userName},
            config
        )
        return check.data
    } catch (error) {
        console.log('Validate username error:',{error:error.message})
    }
}

export default ValidateUserName