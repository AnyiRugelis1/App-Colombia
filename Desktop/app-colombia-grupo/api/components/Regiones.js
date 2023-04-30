import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import axios from "axios";
import RegionesData from "./RegionesData";
import { styles } from "./styles";
import DecorateTextField from "./DecorateTextField";

const Regiones = () => {
  const [regionescolombiaInfo, setRegionesColombiaInfo] = useState([]);
  const [value, setValue] = useState(null);

  const getRegionesColombiaInfo = () => {
    const url = "https://api-colombia.com/api/v1/Region";
    axios.get(url).then((res) => {
      setRegionesColombiaInfo(res.data);
    });
  };

  const regionesFiltradas = () => {
  return  regionescolombiaInfo.filter((region) => {
      if (!value || value.trim() === "") {
        return true;
      } else {
        return region.name.toLowerCase().includes(value.toLowerCase());
      }
    });
  };

  useEffect(() => {
    getRegionesColombiaInfo();
  }, []);

  return (
    <View style={styles.regiones.container}>
      <DecorateTextField
        value={value}
        setValue={setValue}
        placeholder={"Ingresa el nombre de la región"}
        style={styles.decorate_texfield.inputs}
      />
      <FlatList
        data={regionesFiltradas()}
        renderItem={({ item }) => <RegionesData dataRegiones={item} />}
      ></FlatList>
    </View>
  );
};

export default Regiones;
