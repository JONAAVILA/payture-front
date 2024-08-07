import { Pressable, View } from "react-native";
import HeadingText from "../../components/customTexts/HeadingText";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigate } from "react-router-native";


export default function UserCreate (){
    const navigate = useNavigate()

    return(
        <View>
            <Pressable>
                <AntDesign onPress={()=>navigate('/')} name="arrowleft" size={40} color="white" />
            </Pressable>
            <HeadingText>Crear Cuenta</HeadingText>
        </View>
    )
}