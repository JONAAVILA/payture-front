import axios from "axios"
import { URL_CHECK_CODE } from '@env';

const ValidateCode = async (token,code)=>{
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
    }

    const check = await axios.post(URL_CHECK_CODE,{code:code},config)
    return check
}

export default ValidateCode