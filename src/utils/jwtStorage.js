import * as SecureStore from 'expo-secure-store';

export async function saveJwt (token){
    try {
        await SecureStore.setItemAsync('token',token)
        console.log('save:',true)
        return true
    } catch (error) {
        console.log({error:error.message}), false
    }
}

export async function getJwt (){
    try {
        const get = await SecureStore.getItemAsync('token')
        return get
    } catch (error) {
        console.log({error:error.message}), false
    }
}