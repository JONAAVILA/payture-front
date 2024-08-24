import { Formik } from "formik";
import { View } from "moti";
import { StyleSheet, TextInput } from "react-native";
import { validateUser } from '../../utils/validate';
import theme from "../../utils/theme";
import HeadingText from "../customTexts/HeadingText";
import ButtonLogin from '../buttons/ButtonLogin';
import { useState } from "react";
import ModalToken from "../modals/ModalToken";

export default function CreateUsers (){
    const [ visible,setVisible ] = useState(false)
    return(
        <View>
            <Formik initialValues={{
                    name:'',
                    surname:'',
                    email:''
                    }}
                    validationSchema={validateUser}
                    onSubmit={''}
                    >
                {({handleChange,handleBlur,handleSubmit,values,errors,touched})=>(
                    <View>
                        <View style={styles.box_create_input}  >
                            <View style={styles.heading_input} >
                                <HeadingText fontSize={'mediun'} color={'green'} >Usuario</HeadingText>
                            </View>
                            <View>
                                <TextInput style={styles.input}
                                        placeholderTextColor={theme.color.grey}
                                        selectionColor={theme.color.yellow}
                                        placeholder="Nombre"
                                        />
                                <TextInput style={styles.input}
                                        placeholderTextColor={theme.color.grey}
                                        selectionColor={theme.color.yellow}
                                        placeholder="Nombre de usuario"
                                        />
                                <TextInput style={styles.input}
                                        placeholderTextColor={theme.color.grey}
                                        selectionColor={theme.color.yellow}
                                        placeholder="Email"
                                        />
                                <TextInput style={styles.input}
                                        placeholderTextColor={theme.color.grey}
                                        selectionColor={theme.color.yellow}
                                        placeholder="Contraseña"
                                        />
                            </View>
                            <View style={styles.button_horizontal} >
                                <ButtonLogin onPress={()=>setVisible(true)} color={'red'} horizontal={'horizontal'} colorIcon={'black'} ></ButtonLogin>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
            <ModalToken visible={visible} />
        </View>
    )
}

const styles = StyleSheet.create({
    box_create_input:{
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        borderRadius:25,
        padding:15
    },
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
    heading_input:{
        marginTop:25,
        marginBottom:10
    },
    button_horizontal:{
        flex:1,
        alignItems:'center',
        marginTop:25
    }
})