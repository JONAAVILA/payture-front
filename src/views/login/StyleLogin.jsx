import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    container_login:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:theme.color.black,
        width:'100%',
        alignItems:'left',
        justifyContent:'center',
    },
    box_tittle:{
        width:400
    },
    box_login:{
        marginTop:25,
        flexDirection:'row',
        width:400,
    },
    box_input:{
        backgroundColor:theme.color.blackGrey,
        borderRadius:10,
        marginLeft:15,
        width:325,
        padding:10
    },
    box_singin:{
        marginTop:15,
        flexDirection:'row',
        width:400,
    },
    box_input_login:{
        marginTop:30,
        justifyContent:'center',
    },
    box_input_singin:{
        backgroundColor:theme.color.blackGrey,
        borderRadius:10,
        marginRight:15,
        width:325,
        padding:10, 
        justifyContent:'space-around'
    },
    input:{
        backgroundColor:theme.color.black,
        height:50,
        borderRadius:10,
        marginTop:5,
        padding:8,
        color:theme.color.white
    }
})

export default styles