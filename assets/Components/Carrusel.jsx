import { View } from "react-native";
import CarruselPos from "./CarruselPos";

function Carrusel({children}){
    return(
        <View>
            <View>{children}</View>
            <CarruselPos />
        </View>
    )

}

export default Carrusel;