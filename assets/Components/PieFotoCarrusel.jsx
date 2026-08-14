import { View, Text } from "react-native";

function PieFotoCarrusel({titulo,pieFoto}){
    return(
        <View>
            <Text>{titulo}</Text>
            <Text>{pieFoto}</Text>
        </View>
    )
}

export default PieFotoCarrusel;