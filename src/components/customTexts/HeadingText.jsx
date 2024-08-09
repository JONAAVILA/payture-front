import { StyleSheet, Text, View } from "react-native";
import theme from "../../utils/theme";


export default function HeadingText ({children,color,fontSize,fontFamily,restOfProps}){

    const styleText =[
        styles.text,
        fontSize === 'mediun' && styles.mediun,
        fontFamily === 'pacifico' && styles.pacifico,
        color === 'yellow' && styles.yellow,
        color === 'green' && styles.green
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
    },
    green:{
        color:theme.color.green
    },
    pacifico:{
        fontFamily:theme.fontFamily.pacifico
    }
})