import { View } from 'react-native';
import HeadingText from '../../components/customTexts/HeadingText';
import styles from './StyleLogin';
import DefaultText from '../../components/customTexts/DefaultText';
import ButtonLogin from '../../components/buttons/ButtonLogin';

export default function Login (){
    return(
        <View style={styles.container_login}>
            <View style={styles.box_tittle} >
                <HeadingText>Bienvenido</HeadingText>
                <DefaultText>La app que te da recompensas por crear contenido</DefaultText>
            </View>
            <View style={styles.box_login} >    
                <ButtonLogin/>
                <View style={styles.box_input} >
                    <HeadingText fontSize='mediun' >Ingresar</HeadingText>
                </View>
            </View>
        </View>
    )
}