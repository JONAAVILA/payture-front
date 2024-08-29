import { StyleSheet, Text, View } from "react-native";
import theme from "../../utils/theme";


export default function HeadingText ({children,color,fontSize,fontFamily,restOfProps}){

    const styleText =[
        styles.text,
        fontSize === 'medium' && styles.medium,
        fontFamily === 'pacifico' && styles.pacifico,
        color === 'yellow' && styles.yellow,
        color === 'green' && styles.green,
        color === 'white' && styles.white
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
        fontFamily:theme.fontFamily.medium
    },
    medium:{
        fontSize:theme.size.medium
    },
    yellow:{
        color:theme.color.yellow
    },
    green:{
        color:theme.color.green
    },
    pacifico:{
        fontFamily:theme.fontFamily.pacifico
    },
    white:{
        color:theme.color.white
    }
})