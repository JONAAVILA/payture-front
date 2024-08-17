import { ScrollView, View } from "moti";
import Navbar from "../components/menus/Navbar";
import { StyleSheet } from "react-native";
import Menu from "../components/menus/Menu";
import StoryLine from "./StoryLine";
import PostLine from '../views/PostLine';
import CardProfile from "../components/cards/profile/CardProfile";
import Stats from "../components/cards/profile/Stats";

export default function Profile (){
    
    return(
        <View style={styles.container_profile} >
            <Navbar paht={'/home'} />
            <ScrollView>
                <CardProfile/>
                <Stats/>
                <PostLine/>
            </ScrollView>
            <StoryLine/>
            <Menu/>
        </View>
    )
}

const styles = StyleSheet.create({
    container_profile:{
        marginTop:60,
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    }
})