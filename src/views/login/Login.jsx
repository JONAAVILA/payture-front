import { TextInput, View } from 'react-native';
import HeadingText from '../../components/customTexts/HeadingText';
import styles from './StyleLogin';
import DefaultText from '../../components/customTexts/DefaultText';
import ButtonLogin from '../../components/buttons/ButtonLogin';
import theme from '../../theme';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-native';

export default function Login (){
    const [ inputValue,setInputValue ] = useState("")

    const handleValue = (text)=>{
        if(text) setInputValue(text)

    }
    
    const navigate = useNavigate()
   
    const handleSubmit = async ()=>{
        try {
            const access = await axios.post('http://192.168.1.81:3000/users/match',{userName:inputValue})
            if(access.data === true){
                 console.log(access.data);
                 navigate('/usercreate')

            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.container_login}>
            <View style={styles.box_tittle} >
                <HeadingText>Bienvenido</HeadingText>
                <DefaultText>La app que te da recompensas por crear contenido</DefaultText>
            </View>
            <View style={styles.box_login} >    
                <ButtonLogin iconLeft={'left'} />
                <View style={styles.box_input} >
                    <HeadingText fontSize='mediun' >Ingresar</HeadingText>
                    <View style={styles.box_input_login} >
                        <TextInput
                            style={styles.input}
                            placeholder='usuario'
                            placeholderTextColor={theme.color.grey}
                            selectionColor={theme.color.yellow}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='constraseña'
                            placeholderTextColor={theme.color.grey}
                            selectionColor={theme.color.yellow}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.box_singin} >    
                <View style={styles.box_input_singin} >
                    <HeadingText fontSize='mediun' color={'yellow'} >Registrarse</HeadingText>
                    <TextInput
                        style={styles.input}
                        value={inputValue}
                        onChangeText={handleValue}
                        placeholder='email'
                        placeholderTextColor={theme.color.grey}
                        selectionColor={theme.color.yellow}
                    />
                    <DefaultText fontSize={'thin'} >
                        al registrarse acepta las politicas y terminos de acuerdos de la plataforma
                    </DefaultText>
                </View>
                <ButtonLogin onPress={handleSubmit} color={'yellow'} colorIcon={'black'} />
            </View>
        </View>
    )
}