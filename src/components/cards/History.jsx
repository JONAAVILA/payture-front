import { Image, StyleSheet, Pressable, View } from "react-native";
import DefaultText from "../customTexts/DefaultText";
import theme from "../../utils/theme";


export default function History (){

    return(
        <Pressable>
            <View style={styles.container_history} >
                <Image style={styles.image} source={require('../../../assets/profile.png')}/>
                <View  style={styles.shadow} />
                <View style={styles.box_info} >
                    <View>
                        <DefaultText fontSize={'thin'} >Relax🌟</DefaultText>
                    </View>
                    <View>
                        <Image style={styles.profile_image} source={require('../../../assets/image.png')} />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container_history:{
        margin:3,
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        width:110,
        height:160,
    },
    image:{
        width:110,
        height:160,
        borderRadius:25,
    },
    shadow:{
        position:'absolute',
        width:110,
        height:160,
        backgroundColor:theme.color.black80
    },
    box_info:{
        height:150,
        position:'absolute',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profile_image:{
        width:50,
        height:50,
        borderRadius:25
    }
})