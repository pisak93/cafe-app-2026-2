import { TextInput, View, Text } from "react-native";

function Filtro({label,valor,cambiarValor}){
return(
    <View>
        <Text>{label}</Text>
        <TextInput
        keyboardType="number"
        onChangeText={cambiarValor}
        value={valor}
        placeholder="0"
        
        />
    </View>
)

}

export default Filtro;