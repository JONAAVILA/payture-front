import { Image, StyleSheet, TextInput, Pressable, View } from "react-native"
import DefaultText from "../customTexts/DefaultText"
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import theme from "../../utils/theme";


export default function Publications ({image}){
    return(
        <Pressable>
            <View style={styles.container_card} >
                <Image style={styles.description_image} source={image}/>
                <View  style={styles.shadow} />
                <View style={styles.box_head}  >
                    <View style={styles.head} >
                        <Image style={styles.prfile}  source={require('../../../assets/profile.png')} />
                        <View style={styles.profile_info} >
                            <DefaultText fontSize={'xsmall'} fontWeigth={'bold'} >Jona_g</DefaultText>
                            <DefaultText fontSize={'thin'} >Argentina</DefaultText>
                            <DefaultText fontSize={'thin'} >14K</DefaultText>
                        </View>
                    </View>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                </View>
                <View style={styles.description} >
                    <DefaultText fontSize={'thin'} >Lorem ipsum dolor sicia voluptasimos, velit, ab consequatur optio voluptas sit deserunt repudiandae perferendis cupiditate dolorem veritatis undequod illo?</DefaultText>
                    <View style={styles.box_input} >
                        <Feather style={styles.icon_message} name="message-circle" size={24} color="white" />
                        <Feather name="heart" size={24} color="white" />
                    </View>
                </View>
            </View> 
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container_card:{
        position:'relative',
        overflow:'hidden',
        justifyContent:'space-between',
        width:400,
        height:320,
        padding:10,
        margin:5
    },
    shadow:{
        position:'absolute',
        width:400,
        height:320,
        backgroundColor:theme.color.black80
    },
    box_head:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:5
    },
    head:{
        flexDirection:'row'
    },
    prfile:{
        width:50,
        height:50,
        borderRadius:30,
    },
    profile_info:{
        marginLeft:10,
        justifyContent:'center',
    },
    description_image:{
        position:'absolute',
        width:400,
        height:320,
        borderRadius:30,
        paddingVertical:5
    },
    description:{
        paddingHorizontal:5
    },
    box_input:{
        flexDirection:'row',
        justifyContent:'left',
        alignItems:'center',
        marginVertical:5,
    },
    input:{
        borderColor:theme.color.white,
        borderWidth:1,
        borderRadius:25,
        padding:10,
        color:theme.color.white,
        height:40,
        width:340,
        marginVertical:5
    },
    icon_message:{
        width:30,
    }
})