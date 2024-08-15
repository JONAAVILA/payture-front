import { ScrollView, StyleSheet, View } from "react-native";
import Navbar from "../../components/Navbar";
import Publications from "../../components/cards/Publications";
import Menu from "../../components/Menu";
import StoryLine from "../StoryLine";

import image from '../../../assets/image.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'

export default function Home (){
    return(
        <View style={styles.container_home} >
            <Navbar paht={'/usercreate'} />
            <ScrollView>
                <Publications image={image} />
                <Publications image={image2} />
                <Publications image={image3} />
                <Publications image={image} />
            </ScrollView>
            <StoryLine/>
            <Menu/>
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