import { ScrollView, StyleSheet, View } from "react-native";
import HeadingText from "../../components/customTexts/HeadingText";
import Navbar from "../../components/Navbar";

export default function Home (){
    return(
        <View style={styles.container_home} >
            <Navbar paht={'/usercreate'} />
            <HeadingText fontFamily={'pacifico'} color={'green'} >Payture</HeadingText>
            <ScrollView>
               
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container_home:{
        marginTop:60,
        alignItems:'center',
        justifyContent:'center'
    }
})