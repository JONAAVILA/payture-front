import { Modal, StyleSheet, TextInput, View } from "react-native";
import theme from "../../utils/theme";
import HeadingText from "../customTexts/HeadingText";
import DefaultText from "../customTexts/DefaultText";
import ButtonLogin from "../buttons/ButtonLogin";
import { Formik } from "formik";
import ValidateCode from "../../adapters/ValidateCode";
import { useNavigate } from "react-router-native";
import PostUser from '../../adapters/PostUser';
import { useState } from "react";

export default function ModalCode ({visible,valuesUser}){
    const [ message, setMessage ] = useState('')
    const navigate = useNavigate()

    const submit = async (values)=>{
        const code = values.code
        const check = await ValidateCode(code)
        const post = await PostUser(valuesUser)
        if(check === true){
            navigate('/home')
        }else{
            console.log('fail')
        }
    }

    return(
        <Modal transparent={true}
               animationType="slide"
               visible={visible}
               >
                <Formik
                    initialValues={{
                        code:''
                    }}
                    onSubmit={ async (values)=> await submit(values)}
                >
                {({handleChange,handleBlur,handleSubmit,values,errors,touched})=>{
                    return(
                        <View style={styles.container_token}  >
                            <View  style={styles.box_input_token} >
                                    <View style={styles.heading_input_token} >
                                        <HeadingText fontSize={'medium'} color={'green'} >Code</HeadingText>
                                    </View>
                                    <TextInput 
                                        style={styles.input}
                                        value={values.code}
                                        onChangeText={handleChange('code')}
                                        onBlur={handleBlur('code')}
                                        placeholderTextColor={theme.color.grey}
                                        selectionColor={theme.color.yellow}
                                        placeholder="code"
                                    />
                                    {touched.code && errors.code && (
                                        <DefaultText color={'red'} >{errors.code}</DefaultText>
                                    )}
                                    {message && (
                                        <DefaultText color={'green'} >{message}</DefaultText>
                                    )}
                                    <View>
                                        <DefaultText fontSize={'xsmall'} >{`Te vamos a mandar un codigo al email ${valuesUser.email}, revisa tu casilla de spam`}</DefaultText>
                                    </View>
                            </View>
                            <View>
                                <ButtonLogin onPress={handleSubmit} color={'black'} />
                            </View>
                        </View>
                    )
                }}
                </Formik>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container_token:{
        flex:1,
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
    },
    heading_input_token:{
        marginBottom:-5
    },
    input:{
        backgroundColor:theme.color.black,
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        height:50,
        borderRadius:10,
        padding:8,
        color:theme.color.white
    }
})