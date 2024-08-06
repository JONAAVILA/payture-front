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

    }
})

export default styles