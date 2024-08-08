import { StyleSheet, TextInput, View } from "react-native";
import HeadingText from "../customTexts/HeadingText";
import ButtonLogin from "../buttons/ButtonLogin";
import theme from "../../utils/theme";
import { Formik } from "formik";

export default function FormLogin (){
    return(
        <Formik>
            <View style={styles.box_login} >    
                <ButtonLogin iconLeft={'left'} />
                <View style={styles.box_input} >
                    <HeadingText fontSize='mediun' >Ingresar</HeadingText>
                    <View style={styles.box_input_login} >
                        <TextInput
                            style={styles.input}
                            placeholder='usuario'
                            placeholderTextColor={theme.color.grey}
                            selectionColor={theme.color.yellow}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='constraseña'
                            placeholderTextColor={theme.color.grey}
                            selectionColor={theme.color.yellow}
                        />
                    </View>
                </View>
            </View>
        </Formik>
    )
}

const styles = StyleSheet.create({
    box_login:{
        marginTop:25,
        flexDirection:'row',
        width:400,
    },
    box_input:{
        backgroundColor:theme.color.blackGrey,
        borderRadius:10,
        marginLeft:15,
        width:325,
        padding:10
    },
    box_input_login:{
        marginTop:30,
        justifyContent:'center',
    },
    input:{
        backgroundColor:theme.color.black,
        height:50,
        borderRadius:10,
        marginTop:5,
        padding:8,
        color:theme.color.white
    }
})