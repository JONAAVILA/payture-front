import { ScrollView, StyleSheet, View } from "react-native";
import HeadingText from "../../components/customTexts/HeadingText";
import Navbar from "../../components/Navbar";
import Publications from "../../components/cards/Publications";
import Menu from "../../components/Menu";
import History from "../../components/cards/History";

export default function Home (){
    return(
        <View style={styles.container_home} >
            <Navbar paht={'/usercreate'} />
            <View style={styles.payture} >
                <HeadingText fontSize={'mediun'} fontFamily={'pacifico'} color={'green'} >Payture</HeadingText>
            </View>
            <ScrollView>
                <Publications/>
                <Publications/>
                <Publications/>
                <Publications/>
            </ScrollView>
            <ScrollView horizontal={true} style={styles.box_history}>
                <History/>
                <History/>
                <History/>
                <History/>
                <History/>
            </ScrollView>
            <Menu/>
        </View>
    )
}

const styles = StyleSheet.create({
    container_home:{
        marginTop:60,
        alignItems:'center',
        justifyContent:'center'
    },
    payture:{
        marginBottom:5
    },
    box_history:{
        paddingHorizontal:5,
        height:360,
    }
})