import { StyleSheet, Text, View } from "react-native";
import Login from "./src/views/Login.jsx";
import { StatusBar } from "expo-status-bar";

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
      backgroundColor: '#292928',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });