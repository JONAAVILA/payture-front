import { StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import theme from "../../utils/theme";

export default function ButtonLogin ({color,resOfProps,colorIcon,iconLeft,onPress}){

    const buttonStyle = [
        styles.button,
        color === 'yellow' && styles.yellow,
    ]

    const iconStyle = [
        styles.icon,
        colorIcon === 'black' && styles.iconBlack,
        iconLeft === 'left' && styles.iconLeft
    ]

    return(
        <TouchableOpacity style={buttonStyle} onPress={onPress} {...resOfProps} >
            <AntDesign style={iconStyle}
                       name="right"
                       size={35}
                       />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:theme.color.blackGrey,
        borderRadius:10,
        width:50,
        height:260,
    },
    yellow:{
        backgroundColor:theme.color.yellow
    },
    icon:{
        color:theme.color.yellow
    },
    iconBlack:{
        color:theme.color.black
    },
    iconLeft:{
        transform: [{ rotate: '180deg' }],
    }
})