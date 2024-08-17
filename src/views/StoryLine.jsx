import { AnimatePresence, MotiView, ScrollView, View } from "moti";
import { StyleSheet } from "react-native";
import Story from '../components/cards/Story';
import ArrowMenu from '../components/buttons/pressIcons/ArrowMenu';
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../utils/theme";

export default function StoryLine (){

    const [ visible,toggle ] = useState(false)

    const handleVisible = ()=>{
        toggle(!visible);
    }

    return(
        <View  style={styles.container_story} >
            <ArrowMenu handleVisible={handleVisible} />
            <AnimatePresence>
                {visible && <MotiView from={{
                                        height:0
                                    }}
                                    animate={{
                                        height:180
                                    }}
                                    exit={{
                                        height:0
                                    }}
                                    transition={{
                                        type: 'timing',
                                        duration: 300,
                                    }}
                                    style={styles.box_history}
                                    >
                    <ScrollView horizontal={true}>
                        <Story/>
                        <Story/>
                        <Story/>
                        <Story/>
                        <Story/>
                        <Story/>
                        <Story/>
                    </ScrollView>
                </MotiView>}
            </AnimatePresence>
            <LinearGradient
                colors={[theme.color.black,'transparent']}
                start={{x:1,y:0}}
                end={{x:0,y:0}}
                style={styles.gradient}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container_story:{
        width:400,
        alignItems:'center',
        position:'relative',
        overflow:'hidden'
    },
    box_history:{
        paddingHorizontal:5,
        overflow:'hidden'
    },
    gradient:{
        position:'absolute',
        right:0,
        bottom:0,
        height:'100%',
        width:80
    }
})