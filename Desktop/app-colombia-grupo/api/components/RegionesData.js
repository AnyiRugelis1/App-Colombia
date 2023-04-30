import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";

const RegionesData = ({ dataRegiones }) => {
  const { id, name, description,departments } = dataRegiones;
  return (
    <ScrollView style={styles.regiones_data.container}>
      <Text style={styles.regiones_data.text}>{`Indicativo:${id}`}</Text>
      <Text style={styles.regiones_data.text}>{`Nombre: ${name}`}</Text>
      <Text style={styles.regiones_data.text}>{`Descripción: ${description}`}</Text>
      <Text style={styles.regiones_data.text}>{`Departamento :${departments !== null ? departments : "No tiene"
      }`}</Text>
    </ScrollView>
  );
};

export default RegionesData;