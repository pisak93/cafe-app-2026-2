import { View, Text, Image } from "react-native";
import { boton } from "../Styles/Stylesheet";

function Boton({label}){
    return(
        <View style={boton.contenedor}>
            <Text style={boton.texto}>{label}</Text>
        </View>
        
    )

}

export default Boton;