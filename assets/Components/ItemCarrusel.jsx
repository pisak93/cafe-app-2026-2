import { Image, View } from "react-native";
import PieFotoCarrusel from "./PieFotoCarrusel";

function ItemCarrusel({ruta}){
    return(
        <View>
            <Image source={require("../images/expo-logo.png")} />
            <PieFotoCarrusel />
        </View>
    )
}

export default ItemCarrusel;