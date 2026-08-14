import { View } from "react-native";

function Carrusel({children}){
    return(
        <View>
            <View>{children}</View>
            <CarruselPos />
        </View>
    )

}

export default Carrusel;