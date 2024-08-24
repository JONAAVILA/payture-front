import { StyleSheet, View } from 'react-native';
import theme from '../utils/theme';
import HeadingText from '../components/customTexts/HeadingText';
import DefaultText from '../components/customTexts/DefaultText';
import Credentials from '../components/forms/Credentials';
import CheckEmail from '../components/forms/CheckEmail';

export default function Login (){

    return(
        <View style={styles.container_login}>
            <View style={styles.box_tittle} >
                <HeadingText fontFamily={'pacifico'} color={'green'}>Payture</HeadingText>
                <DefaultText>La app que te da recompensas por crear contenido</DefaultText>
            </View>
            <Credentials/>
            <CheckEmail/>
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