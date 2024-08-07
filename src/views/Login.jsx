import { StyleSheet, View } from 'react-native';
import theme from '../utils/theme';
import HeadingText from '../components/customTexts/HeadingText';
import DefaultText from '../components/customTexts/DefaultText';
import FormLogin from '../components/forms/FormLogin';
import FormSingin from '../components/forms/FormSingin';

export default function Login (){

    return(
        <View style={styles.container_login}>
            <View style={styles.box_tittle} >
                <HeadingText>Bienvenido</HeadingText>
                <DefaultText>La app que te da recompensas por crear contenido</DefaultText>
            </View>
            <FormLogin/>
            <FormSingin/>
        </View>
    )
}

const styles = StyleSheet.create({
    container_login:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:theme.color.black,
        width:'100%',
        alignItems:'left',
        justifyContent:'center',
    },
    box_tittle:{
        width:400
    }
})