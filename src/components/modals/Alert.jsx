import { StyleSheet } from "react-native";
import DefaultText from "../customTexts/DefaultText";
import { View } from "react-native-web";

export default function Alert ({children}){
    return(
        <View style={styles.container_alert} >
            <DefaultText>{children}</DefaultText>
        </View>
    )
}

const styles = StyleSheet.create({
    container_alert:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
})