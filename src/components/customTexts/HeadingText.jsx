import { StyleSheet, Text, View } from "react-native";
import theme from "../../utils/theme";


export default function HeadingText ({children,color,fontSize,restOfProps}){

    const styleText =[
        styles.text,
        fontSize === 'mediun' && styles.mediun,
        color === 'yellow' && styles.yellow
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
        color:theme.color.grey,
        fontSize:theme.size.large,
        fontFamily:theme.fontFamily.mediun
    },
    mediun:{
        fontSize:theme.size.mediun
    },
    yellow:{
        color:theme.color.yellow
    }
})