import { ScrollView, View } from "moti";
import { StyleSheet } from "react-native";
import Navbar from "../components/menus/Navbar";
import Menu from "../components/menus/Menu";
import StoryLine from "./lines/StoryLine";
import PostLine from './lines/PostLine';
import CardProfile from "../components/cards/profile/CardProfile";
import Stats from "../components/cards/profile/Stats";

export default function Profile (){
    
    return(
        <View style={styles.container_profile} >
            <Navbar paht={'/home'} profile={true}/>
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
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    }
})