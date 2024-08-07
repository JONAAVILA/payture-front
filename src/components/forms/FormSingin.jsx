import { StyleSheet, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { URL_USER_EXIST } from '@env';
import axios from "axios";
import theme from "../../utils/theme";
import HeadingText from "../customTexts/HeadingText";
import DefaultText from "../customTexts/DefaultText";
import ButtonLogin from "../buttons/ButtonLogin";

export default function FormSingin (){
    const [ inputValue,setInputValue ] = useState("")
    const [ error,setError ] = useState("")
    const navigate = useNavigate()

    const handleInputValue = (text)=>{
        if(text.length >= 1) setInputValue(text)
        if(text.length === 0) setInputValue("")
        setError("")
    }
   
    const handleSubmit = async ()=>{
        try {
            const access = await axios.post(URL_USER_EXIST,{email:inputValue})
            if(access.data === true){
                 console.log(access.data);
                 navigate('/usercreate')
            }
            setError("invalid email")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.box_singin} >    
            <View style={styles.box_input_singin} >
                <HeadingText fontSize='mediun' color={'yellow'} >Registrarse</HeadingText>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputValue}
                    placeholder='email'
                    placeholderTextColor={theme.color.grey}
                    selectionColor={theme.color.yellow}
                />
                {error?<DefaultText>{error}</DefaultText>:null}
                <DefaultText fontSize={'thin'} >
                    al registrarse acepta las politicas y terminos de acuerdos de la plataforma
                </DefaultText>
            </View>
            <ButtonLogin onPress={handleSubmit} color={'yellow'} colorIcon={'black'} />
        </View>
    )
}

const styles = StyleSheet.create({
    box_singin:{
        marginTop:15,
        flexDirection:'row',
        width:400,
    },
    box_input_singin:{
        backgroundColor:theme.color.blackGrey,
        borderRadius:10,
        marginRight:15,
        width:325,
        padding:10, 
        justifyContent:'space-around'
    },
    input:{
        backgroundColor:theme.color.black,
        height:50,
        borderRadius:10,
        marginTop:5,
        padding:8,
        color:theme.color.white
    }
})