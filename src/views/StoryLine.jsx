import { AnimatePresence, MotiView, ScrollView, View } from "moti";
import { StyleSheet } from "react-native";
import History from '../components/cards/History';
import ArrowMenu from '../components/buttons/pressIcons/ArrowMenu';
import { useState } from "react";

export default function StoryLine (){

    const [ visible,toggle ] = useState(false)

    const handleVisible = ()=>{
        if(visible) toggle(false)
        if(!visible) toggle(true)
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
                        <History/>
                        <History/>
                        <History/>
                        <History/>
                        <History/>
                        <History/>
                        <History/>
                    </ScrollView>
                </MotiView>}
            </AnimatePresence>
        </View>
    )
}


const styles = StyleSheet.create({
    container_story:{
        alignItems:'center'
    },
    box_history:{
        paddingHorizontal:5,
        overflow:'hidden'
    }
})