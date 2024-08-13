import { StyleSheet, View } from "react-native";
import Login from "./src/views/Login.jsx";
import { StatusBar } from "expo-status-bar";
import theme from "./src/utils/theme.js";
import { NativeRouter, Route, Routes } from "react-router-native";
import UserCreate from "./src/views/userCreate/UserCreate.jsx";
import Home from "./src/views/home/Home.jsx";

export default function Main ({onLayout}){
    return(
        <NativeRouter>
            <View style={styles.container} onLayout={onLayout} >
                <StatusBar style='light' backgroundColor={theme.color.black} />
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/usercreate" element={<UserCreate/>} />
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </View>
        </NativeRouter>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      backgroundColor:theme.color.black,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });