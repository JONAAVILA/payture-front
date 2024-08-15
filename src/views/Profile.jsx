import { ScrollView, View } from "moti";
import Navbar from "../components/menus/Navbar";
import HeadingText from "../components/customTexts/HeadingText";
import DefaultText from "../components/customTexts/DefaultText";
import Feather from '@expo/vector-icons/Feather';
import { Image, StyleSheet } from "react-native";

import image from '../../assets/profile.png'
import theme from "../utils/theme";
import Menu from "../components/menus/Menu";
import StoryLine from "./StoryLine";

export default function Profile (){
    
    return(
        <View style={styles.container_profile} >
            <Navbar paht={'/home'} />
            <ScrollView>
                <View style={styles.box_profile}>
                    <Image style={styles.image_profile} source={image} />
                    <View  style={styles.shadow} />
                    <View>
                        <HeadingText color={'white'} >JOAQUIN</HeadingText>
                        <DefaultText>Buenos Aires</DefaultText>
                        <DefaultText>Argentina</DefaultText>
                    </View>
                    <Feather name="edit" size={24} color="white"/>
                </View>
                <View style={styles.box_description} >
                    <HeadingText color={'white'} >Relax 🌈</HeadingText>
                    <DefaultText fontSize={'thin'} >Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.</DefaultText>
                    <View style={styles.box_followers} >
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
                </View>
            </ScrollView>
            <StoryLine/>
            <Menu/>
        </View>
    )
}

const styles = StyleSheet.create({
    container_profile:{
        marginTop:60
    },
    box_profile:{
        zIndex:-1,
        position:'relative',
        overflow:'hidden',
        height:400,
        padding:10,
        borderRadius:25,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image_profile:{
        position:'absolute',
        
    },
    shadow:{
        position:'absolute',
        width:400,
        height:400,
        backgroundColor:theme.color.black80
    },
    box_description:{
        zIndex:2,
        position:'relative',
        marginTop:-80,
        padding:10
    },
    box_followers:{
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