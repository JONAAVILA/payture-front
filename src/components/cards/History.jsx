import { Image, StyleSheet, View } from "react-native";
import DefaultText from "../customTexts/DefaultText";


export default function History (){

    return(
        <View style={styles.container_history} >
            <Image style={styles.image} source={require('../../../assets/profile.png')}/>
            <View style={styles.box_info} >
                <View>
                    <DefaultText>Relax🌟</DefaultText>
                </View>
                <View>
                    <Image style={styles.profile_image} source={require('../../../assets/image.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_history:{
        margin:3,
        position:'relative',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:110,
        height:160,
        borderRadius:25
    },
    box_info:{
        height:150,
        position:'absolute',
        justifyContent:'space-between'
    },
    profile_image:{
        width:50,
        height:50,
        borderRadius:25
    }
})