import { StyleSheet, View } from 'react-native';
import HeadingText from '../components/customTexts/HeadingText';
import theme from '../theme';

export default function Login (){
    return(
        <View style={style.container_login} >
            <HeadingText>
                Bienvenido
            </HeadingText>
        </View>
    )
}

const style = StyleSheet.create({
    container_login:{
        flex:1,
        backgroundColor:theme.color.black,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
})