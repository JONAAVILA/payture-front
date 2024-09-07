import axios from "axios";
import { URL_GET_CODE } from '@env';

export default async function GetCode (email){
    console.log('email:',email)
    const response = await axios.post(URL_GET_CODE,{email:email})
    console.log('data:',response.data)
    return response.data
}