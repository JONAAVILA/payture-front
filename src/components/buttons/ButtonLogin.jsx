import { StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import theme from "../../utils/theme";

export default function ButtonLogin ({color,resOfProps,colorIcon,iconLeft,horizontal,onPress}){

    const buttonStyle = [
        styles.button,
        color === 'red' && styles.red,
        horizontal === 'horizontal' && styles.horizontal
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
        borderWidth:1,
        borderColor:theme.color.blackGrey,
        borderRadius:25,
        width:50,
        height:260,
    },
    red:{
        backgroundColor:theme.color.red
    },
    icon:{
        color:theme.color.red
    },
    iconBlack:{
        color:theme.color.black
    },
    iconLeft:{
        transform: [{ rotate: '180deg' }],
    },
    horizontal:{
        width:260,
        height:50
    }
})