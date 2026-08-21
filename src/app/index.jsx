import { FlatList, Text, View } from "react-native";
import Seccion from "../../assets/Components/Seccion";
import Slider from "../../assets/Components/Slider";
import ProductoItem from "../../assets/Components/ProductoItem";



import axios from "axios";
import { useEffect, useState } from "react";


function Index() {


const [productos,setProductos]= useState([]);


async function getProductos(){
const response = await axios.get("https://dofxzdlhadyokehrkxoc.supabase.co/rest/v1/productos",
  {
    headers:{
      apikey:"sb_publishable_D9AUiclRIM8Rw2dE3-4ZKg_LC83mB12"
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
 

  traerProductos();

},[]);
 

 console.log(productos);

  return (
    <View>
   
      <Seccion titulo={"Promociones"}>
        <Slider>
        
           <FlatList
           data={productos}
           renderItem={function ({item}){
            return <ProductoItem nombre={item.nombre} precio={item.precio} complemento={item.valor_por_gramo} key={item.id_producto} />
           }}
           keyExtractor={function (item){return item.id_producto.toString()}}
           horizontal
           showsHorizontalScrollIndicator={false}
           />
        </Slider>
      </Seccion>



 
    </View>
  );
}

export default Index;
