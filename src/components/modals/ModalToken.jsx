import { View } from "moti";
import theme from "../../utils/theme";
import { Modal, StyleSheet, TextInput } from "react-native";
import HeadingText from "../customTexts/HeadingText";
import DefaultText from "../customTexts/DefaultText";
import ButtonLogin from "../buttons/ButtonLogin";
import { useState } from "react";

export default function ModalToken ({visible}){
    return(
        <Modal transparent={true}
                animationType="slide"
                visible={visible}
                >
            <View style={styles.container_token} >
                <View  style={styles.box_input_token} >
                    <View style={styles.heading_input_token} >
                        <HeadingText fontSize={'mediun'} color={'green'} >Token</HeadingText>
                    </View>
                    <TextInput style={styles.input}
                            placeholderTextColor={theme.color.grey}
                            selectionColor={theme.color.yellow}
                            placeholder="Token"
                            />
                    <View style={styles.info_token} >
                        <DefaultText fontSize={'xsmall'} >Valida el token ingrear el código que te vamos a enviar a tu email</DefaultText>
                    </View>
                </View>
                <ButtonLogin onPress={()=>navigate('/home')} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:theme.color.black,
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        height:50,
        borderRadius:10,
        marginTop:5,
        padding:8,
        color:theme.color.white
    },
    container_token:{
        flex:1,
        marginTop:15,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        height:300,
        backgroundColor:theme.color.black99
    },
    box_input_token:{
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        justifyContent:'space-around',
        borderRadius:25,
        padding:15,
        marginRight:15,
        height:260,
        width:335,
        backgroundColor:theme.color.black
    }
})