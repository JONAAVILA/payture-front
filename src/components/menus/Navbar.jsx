import { Image, Pressable, StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigate } from "react-router-native";
import Notification from '../buttons/pressIcons/Notification';
import HeadingText from '../customTexts/HeadingText';
import Feather from '@expo/vector-icons/Feather';

export default function Navbar ({paht,pathProfile,profile}){
    const navigate = useNavigate()

    return(
        <View>
            <View style={styles.container_nav} >
                <Pressable>
                    <AntDesign onPress={()=>navigate(paht)} name="arrowleft" size={24} color="white"/>
                </Pressable>
                <View style={styles.box_profile} >
                    <Notification/>
                    <View style={styles.box_image_profile} >
                        <Pressable onPress={()=>navigate(pathProfile)} >
                        {!profile ?
                            <Image 
                                style={styles.image_profile} 
                                source={require('../../../assets/profile.png')} 
                            />:
                            <Feather 
                            name="settings"
                            size={20}
                            color="white"
                            />}
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.payture} >
                <HeadingText fontSize={'medium'} fontFamily={'pacifico'} color={'green'} >Payture</HeadingText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_nav:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:400
    },
    box_image_profile:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    image_profile:{
        width:30,
        height:30,
        borderRadius:20,
        marginLeft:10
    },
    box_profile:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    payture:{
        marginBottom:5,
        alignItems:'center',
        marginTop:-15
    },
})