import { ScrollView, StyleSheet, View } from "react-native";
import HeadingText from "../../components/customTexts/HeadingText";
import Navbar from "../../components/Navbar";
import Publications from "../../components/cards/Publications";
import Menu from "../../components/Menu";

export default function Home (){
    return(
        <View style={styles.container_home} >
            <Navbar paht={'/usercreate'} />
            <View style={styles.payture} >
                <HeadingText fontFamily={'pacifico'} color={'green'} >Payture</HeadingText>
            </View>
            <ScrollView>
                <Publications/>
                <Publications/>
                <Publications/>
                <Publications/>
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
        marginBottom:15
    }
})