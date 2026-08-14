import { View, Text, Image } from "react-native";
import Boton from "./Boton";

function ProductoItem ({nombre,precio,complemento,imagen}){
    return(
        <View>
            <Boton />
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