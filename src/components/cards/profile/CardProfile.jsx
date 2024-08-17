import { Image, View } from "moti";
import { StyleSheet } from "react-native";
import image from '../../../../assets/profile.png'
import theme from "../../../utils/theme";
import HeadingText from "../../customTexts/HeadingText";
import DefaultText from "../../customTexts/DefaultText";
import Feather from '@expo/vector-icons/Feather';

export default function CardProfile (){
    return(
        <View>
            <View style={styles.box_profile}>
                <Image style={styles.image_profile} source={image} />
                <View  style={styles.shadow} />
                <View>
                    <HeadingText color={'white'} >JOAQUIN</HeadingText>
                    <DefaultText>Buenos Aires</DefaultText>
                    <DefaultText>Argentina</DefaultText>
                </View>
                <View>
                    <Feather 
                        name="edit"
                        margin={10} 
                        size={20} 
                        color="white"
                    />
                </View>
            </View>
            <View style={styles.box_description} >
                <View>
                    <HeadingText color={'white'} >Relax 🌈</HeadingText>
                    <DefaultText fontSize={'thin'} >Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.</DefaultText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box_profile:{
        overflow:'hidden',
        height:500,
        padding:10,
        borderRadius:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image_profile:{
        position:'absolute',
        height:500,
        width:400
    },
    shadow:{
        position:'absolute',
        width:400,
        height:500,
        backgroundColor:theme.color.black80
    },
    box_description:{
        marginTop:-100,
        padding:10
    }
})