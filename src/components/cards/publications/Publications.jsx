import { Pressable, View, ImageBackground, Image } from "react-native"
import DefaultText from "../../customTexts/DefaultText"
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { styles } from "./StylePlublications";
import { MotiView } from "moti";
import { useState } from "react";

export default function Publications ({image}){
    const [ visible,toggle ] = useState(false)

    const handleVisible = () => {
        toggle(!visible);
    }

    return(
        <Pressable onPress={handleVisible}>
            <MotiView 
                from={{
                    height:320
                }}
                animate={{
                    height: visible ? 700 : 320
                }}
                exit={{
                    height:320
                }}
                transition={{
                    type:'timing',
                    duration:300
                }}
                style={styles.container_card} 
                
                >
                <ImageBackground
                    source={image}
                    style={styles.description_image}
                    borderRadius={30}
                >
                    <View  style={styles.shadow} />
                    <View style={styles.box_head}  >
                        <View style={styles.head} >
                            <Image style={styles.prfile}  source={require('../../../../assets/profile.png')} />
                            <View style={styles.profile_info} >
                                <DefaultText fontSize={'xsmall'} fontWeigth={'bold'} >Jona_g</DefaultText>
                                <DefaultText fontSize={'thin'} >Argentina</DefaultText>
                                <DefaultText fontSize={'thin'} >14K</DefaultText>
                            </View>
                        </View>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </View>
                    <View style={styles.description} >
                        <DefaultText fontSize={'thin'} >Lorem ipsum dolor sicia voluptasimos, velit, ab consequatur optio voluptas sit deserunt repudiandae perferendis cupiditate dolorem veritatis undequod illo?</DefaultText>
                        <View style={styles.box_input} >
                            <Feather style={styles.icon_message} name="message-circle" size={24} color="white" />
                            <Feather name="heart" size={24} color="white" />
                        </View>
                    </View>
                </ImageBackground>
            </MotiView> 
        </Pressable>
    )
}
