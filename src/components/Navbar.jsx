import { Image, Pressable, StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigate } from "react-router-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Navbar ({paht}){
    const navigate = useNavigate()

    return(
        <View style={styles.container_nav} >
            <Pressable>
                <AntDesign onPress={()=>navigate(paht)} name="arrowleft" size={24} color="white"/>
            </Pressable>
            <View style={styles.box_profile} >
                <MaterialIcons name="notifications-none" size={24} color="white" />
                <Image style={styles.profile} source={require('../../assets/profile.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_nav:{
        alignItems:'flex-start',
        flexDirection:'row',
        justifyContent:'space-between',
        width:400
    },
    profile:{
        width:30,
        height:30,
        borderRadius:20,
        marginLeft:10
    },
    box_profile:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})