import axios from "axios";
import { URL_FECHT_CODE } from '@env';

export default async function FechtCode (email){
    const response = await axios.post(URL_FECHT_CODE,{email:email})
    return response.data
}