import { StyleSheet, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import theme from "../utils/theme";

export default function Menu (){
    return(
        <View style={styles.container_menu} >
            <Feather name="heart" size={24} color="white" />
            <MaterialIcons name="radar" size={24} color="white" />
            <Ionicons name="home-outline" size={24} color="white" />
            <Fontisto name="search" size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container_menu:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        height:60,
        width:400,
        borderRadius:25,
        marginHorizontal:5,
        marginBottom:30,
        backgroundColor:theme.color.black,
        borderColor:theme.color.blackGrey,
        borderWidth:1,
    }
})