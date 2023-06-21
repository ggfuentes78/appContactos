import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemContacto from "../components/ItemContacto";
import { loadContactos } from "../store/contactos.actions";

const ListaDeContactos = ({navigation}) => {
  const dispatch = useDispatch();
  const contactos = useSelector(state => state.contactos.contactos);

  useEffect(() => {
    dispatch(loadContactos());
  }, []);

  const renderItem = ({ item }) => (
    <ItemContacto
      nombre={item.nombre}
      image={item.image}
      telefono={item.telefono}
      onSelect={() => navigation.navigate("Detalle", { contactoId: item.id })}
    />
  );

  return (
    <FlatList
      data={contactos}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListaDeContactos;
