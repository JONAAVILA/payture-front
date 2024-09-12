import { StyleSheet, View } from "react-native";
import Navbar from "../../components/menus/Navbar";
import Menu from "../../components/menus/Menu";
import StoryLine from "../lines/StoryLine";
import PostLine from "../lines/PostLine";

export default function Home (){
    return(
        <View style={styles.container_home} >
            <Navbar paht={'/create'} pathProfile={'/profile'} />
            <PostLine/>
            <StoryLine/>
            <Menu/>
        </View>
    )
}

const styles = StyleSheet.create({
    container_home:{
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    }
})