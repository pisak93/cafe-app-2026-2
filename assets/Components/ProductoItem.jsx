import { View, Text, Image } from "react-native";
import Boton from "./Boton";
import {producto, general} from "../Styles/Stylesheet";

function ProductoItem ({nombre,precio,complemento,imagen}){
 
    if(precio){
precio = "$ "+precio;
    }
    if(complemento){
        complemento="$ "+ complemento+" /g"
    }
    
    return(
        <View style={producto.contenedor}>
            <Boton label={"+"} />
            <Image source={imagen} />
            <View>
                <Text>{nombre}</Text>
                <Text>{precio}</Text>
                <Text>{complemento}</Text>
            </View>
        </View>
    )
}

export default ProductoItem;