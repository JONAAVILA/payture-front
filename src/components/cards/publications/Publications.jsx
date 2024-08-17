import { Pressable, View, ImageBackground, Image } from "react-native"
import DefaultText from "../../customTexts/DefaultText"
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { styles } from "./StylePlublications";
import { MotiView } from "moti";
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import publi from '../../../../assets/publi.png'

export default function Publications ({image}){
    const [ visible,toggle ] = useState(false)

    const handleVisible = () => {
        toggle(!visible);
    }

    return(
        <View style={styles.container_card} >
            <Pressable onPress={handleVisible}>
                <MotiView 
                    from={{
                        height:250
                    }}
                    animate={{
                        height: visible ? 600 : 250
                    }}
                    exit={{
                        height:250
                    }}
                    transition={{
                        type:'timing',
                        duration:300
                    }}
                    >
                    <ImageBackground
                        source={image}
                        style={styles.description_image}
                    >   
                        <View  style={styles.shadow} />
                        {visible && <View style={styles.dots} >
                            <MaterialIcons name="arrow-back-ios" size={30} color="white" />
                            <MaterialIcons name="arrow-forward-ios" size={30} color="white" />
                        </View>}
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
                            {visible && <Image source={publi} />}
                            <DefaultText fontSize={'thin'} >Lorem ipsum dolor sicia voluptasimos, velit, ab consequatur optio voluptas sit deserunt repudiandae perferendis cupiditate dolorem veritatis undequod illo?</DefaultText>
                            <View style={styles.box_input} >
                                <Feather style={styles.icon_message} name="message-circle" size={24} color="white" />
                                <Feather name="heart" size={24} color="white" />
                            </View>
                        </View>
                    </ImageBackground>
                </MotiView> 
            </Pressable>
        </View>
    )
}
