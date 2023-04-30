import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import axios from 'axios';
import { styles } from './styles';

const MainPage = () => {
    const [colombiaInfo,setColombiaInfo] = useState({});

   const getColombiaInfo = () =>{
     const url="https://api-colombia.com/api/v1/country/colombia";
      axios.get(url).then(res =>{
        setColombiaInfo(res.data);
      });

  }
    useEffect(() => {
      getColombiaInfo();
    },[]);
  return (
    <View style={styles.main_pages.container}>
        <Text style={styles.main_pages.title}>Información de {colombiaInfo.name}</Text>
        <Text style={styles.main_pages.text}>Regiones:{colombiaInfo.name}</Text>
        <Text style={styles.main_pages.descripcion}>Descripción:{colombiaInfo.description}</Text>
        <Text style={styles.main_pages.text}>Capital:{colombiaInfo.stateCapital}</Text>
        <Text style={styles.main_pages.text}>Superficie:{colombiaInfo.surface}</Text>
        <Text style={styles.main_pages.text}>Población:{colombiaInfo.population}</Text>
    </View>
  )
}

export default MainPage;