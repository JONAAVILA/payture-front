import { View } from "moti";
import { StyleSheet } from "react-native";
import DefaultText from "../../customTexts/DefaultText";
import theme from "../../../utils/theme";


export default function Stats (){
    return(
        <View style={styles.box_stats} >
            <View style={styles.stats} >
                <DefaultText fontSize={'thin'} >5000</DefaultText>
                <DefaultText fontSize={'thin'} >Followers</DefaultText>
            </View>
            <View style={styles.stats} >
                <DefaultText fontSize={'thin'} >6550</DefaultText>
                <DefaultText fontSize={'thin'} >Following</DefaultText>
            </View>
            <View style={styles.stats} >
                <DefaultText fontSize={'thin'} >56</DefaultText>
                <DefaultText fontSize={'thin'} >Publications</DefaultText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box_stats:{
        width:'100',
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    stats:{
        borderRadius:25,
        width:120,
        height:50,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        borderWidth:1,
        borderColor:theme.color.blackGrey
    }
})