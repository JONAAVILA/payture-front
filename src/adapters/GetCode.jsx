import axios from "axios";
import { URL_GET_CODE } from '@env';
import { getJwt } from "../utils/jwtStorage";

export default async function GetCode (){
    try {
        const token = await getJwt()
        if(!token) throw new Error('Something where wrong from the email');

        const config = {
            headers:{
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }

        const response = await axios.post(
            URL_GET_CODE,
            {},
            config
        )
        return response.data
    } catch (error) {
        console.log('getcode:',{error:error.message})
    }
}