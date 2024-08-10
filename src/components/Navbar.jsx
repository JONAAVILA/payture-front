import { Pressable, StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigate } from "react-router-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Navbar ({paht}){
    const navigate = useNavigate()

    return(
        <View style={styles.container_nav} >
            <Pressable>
                <AntDesign onPress={()=>navigate(paht)} name="arrowleft" size={30} color="white"/>
            </Pressable>
                <MaterialIcons name="notifications-none" size={30} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container_nav:{
        alignItems:'flex-start',
        flexDirection:'row',
        justifyContent:'space-between',
        width:400
    }
})