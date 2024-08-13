import { Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function ArrowMenu (){
    return(
        <Pressable>
            <MaterialIcons name="keyboard-arrow-down" size={35}color="white" />
        </Pressable>
    )
}