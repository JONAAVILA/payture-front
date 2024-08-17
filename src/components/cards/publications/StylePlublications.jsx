import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export const styles = StyleSheet.create({
    container_card:{
        overflow:'hidden',
        justifyContent:'space-between',
        borderRadius:30,
        width:400,
        marginVertical:2
    },
    dots:{
        position:'absolute',
        width:400,
        top:'50%',
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    shadow:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:theme.color.black80,
        borderRadius:30,
        height:'100%',
    },
    box_head:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
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
        height:'100%',
        justifyContent:'space-between'
    },
    description:{
        padding:10
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