import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import { COLORS } from "../constants";
import ImageSelector from "../components/ImageSelector";
import { addContacto } from "../store/contactos.actions";
import { useDispatch } from "react-redux";

// import LocationSelector from "../components/LocationSelector";



const NuevoContacto = ({ navigation }) => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState("");
  const [image, setImage] = useState();

  const [telefono, setTelefono] = useState();

  const handleNombreChange = text => setNombre(text);

  const handleTelefonoChange = text => setTelefono(text);

  const handleSave = () => {
    dispatch(addContacto(nombre, image, telefono));
    navigation.navigate("Contactos");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <ImageSelector onImage={setImage} />
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={handleNombreChange}
        />
        <Text style={styles.label}>Telefono</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          keyboardType="phone-pad"
          onChangeText={handleTelefonoChange}
        />
        <Button
          title="Guardar Contacto"
          color={COLORS.SECONDARY}
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NuevoContacto;
