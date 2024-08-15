import { Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import theme from '../../../utils/theme';

export default function ArrowMenu ({handleVisible}){
    return(
        <Pressable>
            <MaterialIcons onPress={handleVisible} name="keyboard-arrow-down" size={40} color={theme.color.red} />
        </Pressable>
    )
}