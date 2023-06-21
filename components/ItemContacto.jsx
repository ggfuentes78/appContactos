import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../constants";
import React from "react";

const ItemContacto = ({ nombre, image, telefono, onSelect }) => {
  console.log("IMG", nombre, image)
  return (
    <TouchableOpacity style={styles.placeItem} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.data}>{telefono}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemContacto;

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.CUADRO,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: COLORS.TERTIARY,
    fontSize: 18,
    marginBottom: 6,
  },
  data: {
    color: "#777",
    fontSize: 16,
  },
});
