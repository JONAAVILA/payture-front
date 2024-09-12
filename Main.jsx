import { StyleSheet, View } from "react-native";
import Login from "./src/views/Login.jsx";
import { StatusBar } from "expo-status-bar";
import theme from "./src/utils/theme.js";
import { NativeRouter, Route, Routes } from "react-router-native";
import Create from "./src/views/create/users/Create.jsx";
import Home from "./src/views/home/Home.jsx";
import Profile from "./src/views/Profile.jsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main ({onLayout}){
    const insets = useSafeAreaInsets()

    return(
        <NativeRouter>
            <View style={{
                flex: 1,
                width:'100%',
                backgroundColor:theme.color.black,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop:insets.top,
                paddingBottom:insets.bottom
            }} onLayout={onLayout} >
                <StatusBar style='light' backgroundColor={theme.color.black} />
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/create" element={<Create/>} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </View>
        </NativeRouter>
    )
}