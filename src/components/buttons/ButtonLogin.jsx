import { StyleSheet, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import theme from "../../utils/theme";

export default function ButtonLogin ({resOfProps,colorIcon,iconLeft,horizontal,onPress}){

    const buttonStyle = [
        styles.button,
        horizontal === 'horizontal' && styles.horizontal
    ]

    const iconStyle = [
        styles.icon,
        colorIcon === 'green' && styles.iconGreen,
        iconLeft === 'left' && styles.iconLeft
    ]

    return(
        <Pressable style={buttonStyle} onPress={onPress} {...resOfProps} >
            <AntDesign style={iconStyle}
                       name="right"
                       size={35}
                       />
        </Pressable>
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
    icon:{
        color:theme.color.red
    },
    iconGreen:{
        color:theme.color.green
    },
    iconLeft:{
        transform: [{ rotate: '180deg' }],
    },
    horizontal:{
        width:260,
        height:50
    }
})