import { Formik } from "formik";
import { StyleSheet, TextInput, View } from "react-native";
import { validateUser } from '../../utils/validate';
import { saveJwt } from "../../utils/jwtStorage";
import { useState } from "react";
import theme from "../../utils/theme";
import HeadingText from "../customTexts/HeadingText";
import DefaultText from "../customTexts/DefaultText";
import ButtonLogin from '../buttons/ButtonLogin';
import ModalCode from "../modals/ModalCode";
import GetCode from "../../adapters/GetCode";
import ValidateUserName from "../../adapters/ValidateUserName";
import CheckStatus from "../statusIcons/CheckStatus";
import { updateUser } from "../../redux/Actions";
import StateUser from "../../utils/states/StateUser";

export default function CreateUsers (){
    const [ visible,setVisible ] = useState(false) 
    const [ statusUser, setStatusUser ] = useState(false)
    const email = StateUser('email')

    const handleCheckUser = async (text)=>{
        if(text.length >= 3){
            const check = await ValidateUserName(text)
            setStatusUser(check)
            console.log(check)
        }
    }

    const submit = async (values)=>{
        const token = await GetCode(values.email)
        const save = await saveJwt(token)
        console.log(save)
        if(save){
            console.log('values:',values)
            updateUser(values)
            setVisible(true)
            return
        }
        return console.log('fallo')
    }


    return(
        <View>
            <Formik initialValues={{
                    name:'',
                    userName:'',
                    password:'',
                    email:email
                    }}
                    validationSchema={validateUser}
                    onSubmit={ async (values)=> await submit(values)}
                    >
                {({handleChange,handleBlur,handleSubmit,values,errors,touched})=>(
                    <View>
                        <View style={styles.box_create_input}  >
                            <View style={styles.heading_input} >
                                <HeadingText fontSize={'medium'} color={'green'} >Usuario</HeadingText>
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
                                <View style={styles.box_errors} >
                                    {touched.name && errors.name && (
                                        <DefaultText fontSize={'thin'} color={'red'} >{errors.name}</DefaultText>
                                    )}
                                </View>
                                <View style={styles.box_status} >
                                    <TextInput style={styles.input}
                                            value={values.userName}
                                            onChangeText={(text)=>{
                                                handleCheckUser(text)
                                                handleChange('userName')(text)
                                            }}
                                            onBlur={handleBlur('userName')}
                                            placeholderTextColor={theme.color.white}
                                            selectionColor={theme.color.yellow}
                                            placeholder="nombre de usuario"
                                            />
                                    <View style={styles.status_user} >
                                        {values.userName.length > 3 && <CheckStatus statusUser={statusUser} /> }
                                    </View>
                                </View>
                                <View style={styles.box_errors} >
                                    {touched.userName && errors.userName && (
                                        <DefaultText fontSize={'thin'} color={'red'}  >{errors.userName}</DefaultText>
                                    )}
                                </View>
                                <TextInput style={styles.input}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        placeholderTextColor={theme.color.white}
                                        selectionColor={theme.color.yellow}
                                        placeholder="contraseña"
                                        />
                                <View style={styles.box_errors} >
                                    {touched.password && errors.password && (
                                        <DefaultText fontSize={'thin'} color={'red'} >{errors.password}</DefaultText>
                                    )}
                                </View>
                            </View>
                            <View style={styles.button_horizontal} >
                                <ButtonLogin 
                                    onPress={handleSubmit}
                                    horizontal={'horizontal'} 
                                    colorIcon={'green'} 
                                />
                            </View>
                        </View>
                        <ModalCode visible={visible} valuesUser={values}  />
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
    box_errors:{
        height:12,
        paddingLeft:8
    },
    heading_input:{
        marginTop:25,
        marginBottom:10
    },
    button_horizontal:{
        flex:1,
        alignItems:'center',
        marginTop:25
    },
    box_status:{
        position:'relative'
    },
    status_user:{
        position:'absolute',
        right:10,
        top:17
    }
})