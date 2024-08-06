import { Pressable, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import theme from "../../theme";

export default function ButtonLogin ({color,resOfProps,colorIcon,iconLeft}){

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
        <Pressable style={buttonStyle} {...resOfProps} >
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