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
                    <HeadingText fontSize='mediun' color={'grey'} >Ingresar</HeadingText>
                    <View style={styles.box_input_login} >
                        <TextInput
                            style={styles.input}
                            placeholder='usuario'
                            placeholderTextColor={theme.color.white}
                            selectionColor={theme.color.yellow}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='constraseña'
                            placeholderTextColor={theme.color.white}
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
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        borderRadius:25,
        marginLeft:15,
        width:325,
        padding:15
    },
    box_input_login:{
        marginTop:30,
        justifyContent:'center',
    },
    input:{
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        height:50,
        borderRadius:10,
        marginTop:5,
        padding:8,
        color:theme.color.white
    }
})