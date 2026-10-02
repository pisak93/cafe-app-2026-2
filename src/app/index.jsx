import { FlatList, Text, View } from "react-native";
import Seccion from "../../assets/Components/Seccion";
import Slider from "../../assets/Components/Slider";
import ProductoItem from "../../assets/Components/ProductoItem";
import { slider } from "../../assets/Styles/Stylesheet";
import Filtro from "../../assets/Components/Filtro";
import api from "../../assets/api/axios";


import axios from "axios";
import { useEffect, useState } from "react";



function Index() {


const [productos,setProductos]= useState([]);

const [filtro, setFiltro]= useState(0);


async function getProductos(){

   const params = {};

    if (filtro !== "") {
        params.precio = "gte."+filtro;
    }

const response = await api.get("/productos",
  {
    params:{
      select:"id_producto,nombre,precio,nombre_imagen,valor_por_gramo,productor(nombre)",
      precio:params
    }
  }
);
console.log(response);
return response.data;
}



useEffect(function(){
  async function traerProductos() {
    const data = await getProductos();
    setProductos(data);
  }
 
  const timeout = setTimeout(() => {
        traerProductos();
    }, 500);

    return () => {
        clearTimeout(timeout);
    };

},[filtro]);
 

 console.log(productos);

  return (
    <View>
   
      <Seccion titulo={"Promociones"}>
        <Slider>
        
           <FlatList 
            contentContainerStyle={slider.contenedor}
           data={productos}
           renderItem={function ({item}){
            return <ProductoItem nombre={item.nombre} precio={item.precio} complemento={item.valor_por_gramo} imagen={item.nombre_imagen} productor={item.productor.nombre} key={item.id_producto} />
           }}
           keyExtractor={function (item){return item.id_producto.toString()}}
           horizontal
           showsHorizontalScrollIndicator={false}
           />
        </Slider>
      </Seccion>
      <Filtro label={"Precio mínimo"} valor={filtro} cambiarValor={setFiltro} />

      



 
    </View>
  );
}

export default Index;
