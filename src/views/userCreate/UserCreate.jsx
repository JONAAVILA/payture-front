import { Modal, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native";
import HeadingText from "../../components/customTexts/HeadingText";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigate } from "react-router-native";
import theme from "../../utils/theme";
import { Formik } from "formik";
import { validateUser } from "../../utils/validate";
import ButtonLogin from "../../components/buttons/ButtonLogin";
import DefaultText from "../../components/customTexts/DefaultText";
import { useState } from "react";


export default function UserCreate (){
    const [ modalVisible,setModalVisible ] = useState(false)
    const navigate = useNavigate()

    return(
        <View style={styles.container_create} >
            <Pressable>
                <AntDesign onPress={()=>navigate('/')} name="arrowleft" size={30} color="white"/>
            </Pressable>
            <ScrollView>
                <View style={styles.heading_account} >
                    <HeadingText>Crear Cuenta</HeadingText>
                    <DefaultText fontSize={'xsmall'} >en solo unos simples pasos podes crear tu cuenta</DefaultText>
                </View>
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
                                            <ButtonLogin onPress={()=>setModalVisible(true)} color={'red'} horizontal={'horizontal'} colorIcon={'black'} ></ButtonLogin>
                                        </View>
                                    </View>
                                    <Modal transparent={true}
                                           animationType="slide"
                                           visible={modalVisible}
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
                                </View>
                            )}
                        </Formik>
                    </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container_create:{
        width:400,
        backgroundColor:theme.color.black
    },
    box_create_input:{
        backgroundColor:theme.color.blackGrey,
        borderRadius:10,
        padding:10
    },
    input:{
        backgroundColor:theme.color.black,
        height:50,
        borderRadius:10,
        marginTop:5,
        padding:8,
        color:theme.color.white
    },
    heading_account:{
        marginTop:15,   
        marginBottom:15,
        paddingLeft:7
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
    container_token:{
        flex:1,
        marginTop:15,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        backgroundColor:theme.color.black99
    },
    box_input_token:{
        justifyContent:'space-around',
        borderRadius:10,
        padding:10,
        marginRight:15,
        height:260,
        width:335,
        backgroundColor:theme.color.blackGrey
    }
})