import { StyleSheet, View } from "react-native";
import Navbar from "../../components/menus/Navbar";
import Menu from "../../components/menus/Menu";
import StoryLine from "../StoryLine";
import PostLine from "../PostLine";

export default function Home (){
    return(
        <View style={styles.container_home} >
            <Navbar paht={'/usercreate'} pathProfile={'/profile'} />
            <PostLine/>
            <StoryLine/>
            <Menu/>
        </View>
    )
}

const styles = StyleSheet.create({
    container_home:{
        marginTop:60,
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    }
})