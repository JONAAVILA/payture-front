import axios from "axios";
import { URL_GET_CODE } from '@env';
import { getJwt } from "../utils/jwtStorage";

export default async function GetCode (email){
    try {
        const emailToken = await getJwt()
        if(emailToken != email) throw new Error('Email invalid');

        const response = await axios.post(
            URL_GET_CODE,
            {
                email:email
            }
        )
        return response.data
    } catch (error) {
        console.log('getcode:',{error:error.message})
    }
}