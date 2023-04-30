import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  regiones_data: {
    container: {
      width: 340,
      padding: 10,
      borderWidth: 0.75,
      borderRadius: 20,
      margin: "1%",
      marginLeft: "6%",
      backgroundColor: "#13A5EE",
      marginVertical: 8,
      marginHorizontal: 1,
    },
    text: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
    },
  },
  regiones: {
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 10,
    },
  },
  main_pages: {
    container: {
      flex: 1,
      margin: 20,
      borderRadius: 30,
      backgroundColor: "#eaeaea",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginVertical: 10,
    },
    descripcion: {
      justifyContent: "center",
      fontSize: 10,
      paddingVertical: 10,
      fontWeight: "bold",
      paddingVertical: 29,
    },
  },
  decorate_texfield:{
    inputs: {
      borderWidth: 1,
      width: "88%",
      borderRadius: 40, 
      marginLeft: 10,
      marginTop: 20,
      marginBottom:10,
      borderColor: "#1580a4",
      padding: 15,
      backgroundColor: "white",
      color: "#212121",
      fontSize: 16,
    }
  }
});
