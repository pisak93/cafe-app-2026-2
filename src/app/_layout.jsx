import { Stack } from "expo-router";
import { Text } from "react-native";

 function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor:"#4B2A19"
      },
      headerTintColor:"#F1E5D1",
      headerTitleStyle:{
        fontSize:32,
        fontWeight:700,
        
      }
    }
    }
   
      >
      <Stack.Screen name="index" options={{headerTitle:"COFFEE APP"}} />

    </Stack>
  )
}


export default RootLayout;