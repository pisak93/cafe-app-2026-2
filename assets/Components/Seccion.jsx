import { View, Text } from "react-native";

function Seccion({titulo, descripcion,children}){
    return(
        <View>
            <View></View>
            <View>
                <Text>{titulo}</Text>
                <Text>{descripcion}</Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}

export default Seccion;