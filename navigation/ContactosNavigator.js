import { Platform, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";
import DetalleDeContacto from "../screens/DetalleDeContacto";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListaDeContactos from "../screens/ListaDeContactos";
import NuevoContacto from "../screens/NuevoContacto";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens

const PlaceStack = createNativeStackNavigator();

const ContactosNavigator = () => (
  <PlaceStack.Navigator
    initialRoute="Contactos"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.MAIN : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : COLORS.MAIN,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <PlaceStack.Screen
      name="Contactos"
      component={ListaDeContactos}
      options={({ navigation }) => ({
        title: "Contactos",
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
            <Ionicons name="md-add" color={"white"} size={30} />
          </TouchableOpacity>
        ),
      })}
    />
    <PlaceStack.Screen
      name="Detalle"
      component={DetalleDeContacto}
      options={{ title: "Detalle del Contacto" }}
    />
    <PlaceStack.Screen
      name="Nuevo"
      component={NuevoContacto}
      options={{ title: "Nuevo Contacto" }}
    />
  </PlaceStack.Navigator>
);

export default ContactosNavigator;
