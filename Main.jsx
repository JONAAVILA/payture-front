import { StyleSheet, View } from "react-native";
import Login from "./src/views/login/Login.jsx";
import { StatusBar } from "expo-status-bar";
import theme from "./src/theme.jsx";
import { NativeRouter, Route, Routes } from "react-router-native";
import UserCreate from "./src/views/userCreate/UserCreate.jsx";

export default function Main ({onLayout}){
    return(
        <NativeRouter>
            <View style={styles.container} onLayout={onLayout} >
                <StatusBar style='light' />
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/usercreate" element={<UserCreate/>} />
                </Routes>
            </View>
        </NativeRouter>
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