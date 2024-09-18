import axios from "axios"
import { URL_CHECK_CODE } from '@env';
import { getJwt } from "../utils/jwtStorage";

const ValidateCode = async (code)=>{
  try {
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
  } catch (error) {
     console.log({error:error.message})
     return 'Somethings wrong'
  }
}

export default ValidateCode