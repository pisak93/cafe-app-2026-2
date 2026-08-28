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
  

    imagen="https://dofxzdlhadyokehrkxoc.supabase.co/storage/v1/object/public/productos/"+imagen;

    console.log(imagen);
    return(
        <View style={producto.contenedor}>
            <Boton label={"+"} />
            <Image source={{uri:imagen}} style={producto.imagen} />
            <View>
                <Text>{nombre}</Text>
                <Text>{precio}</Text>
                <Text>{complemento}</Text>
            </View>
        </View>
    )
}

export default ProductoItem;