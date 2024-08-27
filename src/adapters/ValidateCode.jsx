import axios from "axios"
import { URL_CHECK_CODE } from '@env';

const ValidateCode = async (token,code)=>{
    const check = await axios.get(URL_CHECK_CODE,token,code)
}