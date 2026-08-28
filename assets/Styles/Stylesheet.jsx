import {StyleSheet} from "react-native";


const general = StyleSheet.create({


});
const slider= StyleSheet.create({
contenedor:{
    gap:20,
}
});

const producto = StyleSheet.create({
contenedor:{
    padding:20,
    maxWidth:160,
    gap:20
},
imagen:{
    width:150,
    height:150,
    borderRadius:10,
    overflow:"hidden"
},


});


const boton = StyleSheet.create({
contenedor:{
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:"#4B2A19",
    alignSelf:"flex-end"
},
texto:{
    color:"#F1E5D1",
    fontSize:20,
    textAlign:"center",
    fontWeight:700
}

});

export {general, producto, boton, slider};