import { ScrollView, StyleSheet, View } from "react-native";
import Navbar from "../../components/Navbar";
import Publications from "../../components/cards/Publications";
import Menu from "../../components/Menu";
import History from "../../components/cards/History";
import ArrowMenu from '../../components/buttons/pressIcons/ArrowMenu';
import { AnimatePresence, MotiView } from "moti";

import image from '../../../assets/image.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'
import { useState } from "react";

export default function Home (){

    const [ visible,toggle ] = useState(false)

    const handleVisible = ()=>{
        if(visible) toggle(false)
        if(!visible) toggle(true)
    }

    return(
        <View style={styles.container_home} >
            <Navbar paht={'/usercreate'} />
            <ScrollView>
                <Publications image={image} />
                <Publications image={image2} />
                <Publications image={image3} />
                <Publications image={image} />
            </ScrollView>
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
                    </ScrollView>
                </MotiView>}
            </AnimatePresence>
            <Menu/>
        </View>
    )
}

const styles = StyleSheet.create({
    container_home:{
        marginTop:60,
        alignItems:'center',
        justifyContent:'center'
    },
    box_history:{
        paddingHorizontal:5,
        height:360,
        overflow:'hidden'
    }
})