import * as FileSystem from "expo-file-system";

import { fetchContactos, insertContacto } from "../db";

export const ADD_CONTACTO = "ADD_CONTACTO";
export const LOAD_CONTACTOS = "LOAD_CONTACTOS";

export const addContacto = (nombre, image, telefono) => {
  return async dispatch => {

    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      const result = await insertContacto(
        nombre,
        image,
        telefono
      );
      console.log(result);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
    dispatch({
      type: ADD_CONTACTO,
      payload: {
        nombre,
        image: Path,
        telefono,
      },
    });
  };
};

export const loadContactos = () => {
  return async dispatch => {
    try {
      const result = await fetchContactos();
      console.log(result);
      dispatch({ type: LOAD_CONTACTOS, contactos: result.rows._array });
    } catch (error) {
      throw error;
    }
  };
};
