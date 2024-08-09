import { Pressable, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigate } from "react-router-native";

export default function Navbar ({paht}){
    const navigate = useNavigate()

    return(
        <View>
            <Pressable>
                <AntDesign onPress={()=>navigate(paht)} name="arrowleft" size={30} color="white"/>
            </Pressable>
        </View>
    )
}