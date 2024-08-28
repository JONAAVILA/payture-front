import { StyleSheet, TextInput, View } from "react-native";
import { Formik } from "formik";
import { validateSingin } from "../../utils/validate";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import theme from "../../utils/theme";
import HeadingText from "../customTexts/HeadingText";
import DefaultText from "../customTexts/DefaultText";
import ButtonLogin from "../buttons/ButtonLogin";
import ValidateEmail from '../../adapters/ValidateEmail';

export default function CheckEmail (){
    const [ accessError,setAccessError ] = useState('')
    const navigate = useNavigate()

    return( 
        <Formik initialValues={{email:''}}
                validationSchema={validateSingin}
                onSubmit={async (values)=> {
                    const access = await ValidateEmail(values)
                    if(access === true) navigate('/create')
                    setAccessError('User exist')
                }}
                >
            {({handleChange,handleBlur,handleSubmit,values,errors,touched})=>(
                <View style={styles.box_singin} >    
                    <View style={styles.box_input_singin} >
                        <HeadingText fontSize='mediun' color={'green'} >Registrarse</HeadingText>
                        <TextInput
                            style={styles.input}
                            value={values.email}
                            onChangeText={(text)=>{
                                handleChange('email')(text)
                                setAccessError('')
                            }}
                            onBlur={handleBlur('email')}
                            placeholder='email'
                            placeholderTextColor={theme.color.white}
                            selectionColor={theme.color.yellow}
                        />
                        <View style={styles.error} >
                        {touched.email && errors.email && (
                                <DefaultText fontSize={'thin'} color={'red'} >{errors.email}</DefaultText>
                        )}
                        {accessError && (
                                <DefaultText fontSize={'thin'} color={'red'} >{accessError}</DefaultText>
                        )}
                        </View>
                        <DefaultText fontSize={'thin'} >
                            al registrarse acepta las politicas y terminos de acuerdos de la plataforma
                        </DefaultText>
                    </View>
                    <ButtonLogin onPress={handleSubmit} color={'red'} colorIcon={'black'} />
                </View>)}
        </Formik>
    )
}

const styles = StyleSheet.create({
    box_singin:{
        marginTop:15,
        flexDirection:'row',
        width:400,
    },
    box_input_singin:{
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        borderRadius:25,
        marginRight:15,
        width:325,
        padding:15, 
        justifyContent:'space-around'
    },
    input:{
        borderColor:theme.color.blackGrey,
        borderWidth:1,
        height:50,
        borderRadius:10,
        marginTop:5,
        padding:8,
        color:theme.color.white
    },
    error:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'left',
        paddingLeft:2,
        height:10,
        width:325,
        marginTop:-25
    }
})