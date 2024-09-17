import axios from "axios"
import { URL_CHECK_CODE } from '@env';
import { getJwt } from "../utils/jwtStorage";

const ValidateCode = async (code)=>{
    const token = await getJwt()

    const config = {
      headers:{
        'Authorazation': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }

    const check = await axios.post(URL_CHECK_CODE,{code:code},config)
    console.log("check",check.data)
    return check.data
}

export default ValidateCode