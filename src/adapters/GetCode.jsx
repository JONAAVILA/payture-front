import axios from "axios";
import { URL_GET_CODE } from '@env';

export default async function GetCode (email){
    const response = await axios.post(URL_GET_CODE,{email:email})
    return response.data
}