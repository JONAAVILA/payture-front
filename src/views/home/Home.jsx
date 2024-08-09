import { View } from "react-native";
import HeadingText from "../../components/customTexts/HeadingText";
import Navbar from "../../components/Navbar";

export default function Home (){
    return(
        <View>
            <Navbar paht={'/usercreate'} />
            <HeadingText fontFamily={'pacifico'} fontSize={'mediun'} >Bienvenido Esteban</HeadingText>
        </View>
    )
}