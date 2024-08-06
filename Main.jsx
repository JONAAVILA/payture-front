import { StyleSheet, View } from "react-native";
import Login from "./src/views/login/Login.jsx";
import { StatusBar } from "expo-status-bar";
import theme from "./src/theme.jsx";

export default function Main ({onLayout}){
    return(
        <View style={styles.container} onLayout={onLayout} >
            <StatusBar style='light' />
            <Login/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      backgroundColor:theme.color.blackGrey,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });