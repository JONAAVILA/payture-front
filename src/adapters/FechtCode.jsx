import axios from "axios";
import { URL_FECHT_CODE } from '@env';

export default async function FechtCode (email){
    console.log(URL_FECHT_CODE)
    const response = await axios.post(URL_FECHT_CODE,{email:email})
    return response.data
}