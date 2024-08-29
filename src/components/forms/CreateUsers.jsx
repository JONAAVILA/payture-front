import { Formik } from "formik";
import { View } from "moti";
import { StyleSheet, TextInput } from "react-native";
import { validateUser } from '../../utils/validate';
import theme from "../../utils/theme";
import HeadingText from "../customTexts/HeadingText";
import ButtonLogin from '../buttons/ButtonLogin';
import { useState } from "react";
import ModalCode from "../modals/ModalCode";
import DefaultText from "../customTexts/DefaultText";
import GetCode from "../../adapters/GetCode";
import { saveJwt } from "../../utils/jwtStorage";
import PostUser from "../../adapters/PostUser";

export default function CreateUsers (){
    const [ visible,setVisible ] = useState(false)

    return(
        <View>
            <Formik initialValues={{
                    name:'',
                    userName:'',
                    email:'',
                    password:''
                    }}
                    validationSchema={validateUser}
                    onSubmit={
                        async (values)=>{
                            const create = await PostUser(values)
                            console.log(create.data)
                        }
                    }
                    >
                {({handleChange,handleBlur,handleSubmit,values,errors,touched})=>(
                    <View>
                        <View style={styles.box_create_input}  >
                            <View style={styles.heading_input} >
                                <HeadingText fontSize={'mediun'} color={'green'} >Usuario</HeadingText>
                            </View>
                            <View>
                                <TextInput style={styles.input}
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        placeholderTextColor={theme.color.white}
                                        selectionColor={theme.color.yellow}
                                        placeholder="nombre"
                                        />
                                {touched.name && errors.name && (
                                    <DefaultText>{errors.name}</DefaultText>
                                )}
                                <TextInput style={styles.input}
                                        value={values.userName}
                                        onChangeText={handleChange('userName')}
                                        onBlur={handleBlur('userName')}
                                        placeholderTextColor={theme.color.white}
                                        selectionColor={theme.color.yellow}
                                        placeholder="nombre de usuario"
                                        />
                                {touched.userName && errors.userName && (
                                    <DefaultText>{errors.userName}</DefaultText>
                                )}
                                <TextInput style={styles.input}
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        placeholderTextColor={theme.color.white}
                                        selectionColor={theme.color.yellow}
                                        placeholder="email"
                                        />
                                {touched.email && errors.email && (
                                    <DefaultText>{errors.email}</DefaultText>
                                )}
                                <TextInput style={styles.input}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        placeholderTextColor={theme.color.white}
                                        selectionColor={theme.color.yellow}
                                        placeholder="contraseña"
                                        />
                                {touched.password && errors.password && (
                                    <DefaultText>{errors.password}</DefaultText>
                                )}
                            </View>
                            <View style={styles.button_horizontal} >
                                <ButtonLogin 
                                    onPress={
                                        async ()=>{
                                            setVisible(true)
                                            const email = values.email
                                            const token = await GetCode(email)
                                            await saveJwt(token)
                                        }
                                    }
                                    horizontal={'horizontal'} 
                                    colorIcon={'green'} 
                                />
                            </View>
                        </View>
                        <ModalCode visible={visible} submit={handleSubmit} />
                    </View>
                )}
            </Formik>
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