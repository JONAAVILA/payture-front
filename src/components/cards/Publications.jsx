import { Image, StyleSheet, TextInput, View } from "react-native"
import DefaultText from "../customTexts/DefaultText"
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import theme from "../../utils/theme";


export default function Publications (){
    return(
        <View style={styles.container_card} >
            <View style={styles.box_head}  >
                <View style={styles.head} >
                    <Image style={styles.prfile}  source={require('../../../assets/profile.png')} />
                    <View style={styles.profile_info} >
                        <DefaultText fontSize={'thin'} >JONA</DefaultText>
                        <DefaultText fontSize={'thin'} >ARGENTINA</DefaultText>
                        <DefaultText fontSize={'thin'} >14K</DefaultText>
                    </View>
                </View>
                <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
            <Image style={styles.description_image} source={require('../../../assets/image.png')}/>
            <View style={styles.description} >
                <DefaultText>Lorem ipsum dolor sicia voluptasimos, velit, ab consequatur optio voluptas sit deserunt repudiandae perferendis cupiditate dolorem veritatis undequod illo?</DefaultText>
            </View>
            <View style={styles.box_input} >
                <TextInput style={styles.input} cursorColor={'white'} />
                <Feather style={styles.icon_message} name="message-circle" size={24} color="white" />
                <Feather name="heart" size={24} color="white" />
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container_card:{
        borderWidth:1,
        borderColor:theme.color.blackGrey,
        borderRadius:25,
        padding:10,
        margin:5
    },
    box_head:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10
    },
    head:{
        flexDirection:'row'
    },
    prfile:{
        width:50,
        height:50,
        borderRadius:25,
    },
    profile_info:{
        marginLeft:10,
        justifyContent:'center',
    },
    description_image:{
        width:370,
        height:200,
        borderRadius:25,
        paddingVertical:5
    },
    description:{
        marginVertical:5,
        paddingVertical:5
    },
    box_input:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        borderRadius:25,
        padding:10,
        color:theme.color.white,
        height:40,
        width:340,
        marginVertical:5
    },
    icon_message:{
        marginLeft:-30,
        marginRight:10
    }
})