import { View, Text } from "react-native";

function HomeSeccion({nombre,children}){
    return(
        <View>
            <View>
                <Text>Hola,</Text>
                <Text>{nombre}</Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}

export default HomeSeccion;