import * as SecureStore from 'expo-secure-store';

export async function saveJwt (token){
    try {
        const save = await SecureStore.setItemAsync('token',token)
        return console.log(true)
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