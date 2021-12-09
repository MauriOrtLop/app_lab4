import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import axios from "axios";

function ContactList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/contactos")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.tarjeta}>
      {data.map((data) => (
        <Text style={styles.name}  onPress ={()=>props.navigation.navigate('Detalles',{idUser: data.id})} >{data.id}{" "}{data.name}</Text>
      ))}
      <Button onPress={()=>props.navigation.navigate('Crear')} title='Agregar contacto'/>
    </View>
  );
}
const styles = StyleSheet.create({
    tarjeta: {
      display: 'flex',
      alignItems: "flex-start"
    },
    name:{
        fontSize: 25,
        margin: 2,
        backgroundColor: 'green',
        color:'white',
        borderWidth: 2
    }

  });
export default ContactList




