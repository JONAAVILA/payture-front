import { Modal, StyleSheet, TextInput, View } from "react-native";
import theme from "../../utils/theme";
import HeadingText from "../customTexts/HeadingText";
import DefaultText from "../customTexts/DefaultText";
import ButtonLogin from "../buttons/ButtonLogin";
import { Formik } from "formik";
import ValidateCode from "../../adapters/ValidateCode";
import { getJwt } from "../../utils/jwtStorage";
import { useNavigate } from "react-router-native";

export default function ModalCode ({visible,submit}){
    
    const navigate = useNavigate()

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
                    <Formik
                        initialValues={{
                            code:''
                        }}
                        onSubmit={
                            async (values)=>{
                                const token = getJwt()
                                const check = await ValidateCode(token,values.code)
                                if(check === true){
                                    submit()
                                    navigate('/home')
                                }else{
                                    console.log('fail')
                                }
                            }
                        }
                    >
                    {({handleChange,handleBlur,handleSubmit,values,errors,touched})=>{
                        return(
                            <>
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
                                    <DefaultText>{errors.code}</DefaultText>
                                )}
                                <ButtonLogin onPress={handleSubmit} />
                            </>
                        )
                    }}
                    </Formik>
                    <View style={styles.info_code} >
                        <DefaultText fontSize={'xsmall'} >Valida el token ingrear el código que te vamos a enviar a tu email</DefaultText>
                    </View>
                </View>
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