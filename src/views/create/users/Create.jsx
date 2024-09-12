import { ScrollView, StyleSheet, View } from "react-native";
import HeadingText from "../../../components/customTexts/HeadingText";
import theme from "../../../utils/theme";
import DefaultText from "../../../components/customTexts/DefaultText";
import Navbar from "../../../components/menus/Navbar";
import CreateUsers from "../../../components/forms/CreateUsers";


export default function Create (){
    return(
        <View style={styles.container_create} >
            <Navbar paht={'/'}/>
            <ScrollView>
                <View style={styles.heading_account} >
                    <HeadingText color={'white'} fontSize={'medium'} >Crear Cuenta</HeadingText>
                    <DefaultText fontSize={'xsmall'} >en solo unos simples pasos podes crear tu cuenta</DefaultText>
                </View>
                <CreateUsers/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container_create:{
        flex:1,
        width:400,
        backgroundColor:theme.color.black,
        justifyContent:'flex-start'

    },
    heading_account:{
        marginTop:15,   
        marginBottom:15,
        paddingLeft:7
    }
})