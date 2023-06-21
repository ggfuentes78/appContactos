import { StyleSheet, Text, View } from "react-native";

import React from "react";

const DetalleDeContacto = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Detalle del Contacto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetalleDeContacto;
