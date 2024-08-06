import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";


export default function DefaultText ({children,color,fontSize,restOfProps}){

    const styleText =[
        styles.text,
        fontSize === 'xsmall' && styles.xsmall,
        fontSize === 'thin' && styles.thin,
        color === 'yellow' && styles.yellow,
    ]

    return(
        <View>
            <Text style={styleText} {...restOfProps} >
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:theme.color.white,
        fontSize:theme.size.small,
        fontFamily:theme.fontFamily.regular
    },
    xsmall:{
        fontSize:theme.size.xsmall
    },
    thin:{
        fontSize:theme.size.thin
    },
    grey:{
        color:theme.color.grey
    }
})