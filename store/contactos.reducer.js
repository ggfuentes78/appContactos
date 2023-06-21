import { ADD_CONTACTO, LOAD_CONTACTOS } from "./contactos.actions";

import Contacto from "../models/Contacto";

const initialState = {
  contactos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACTO:
      const newContacto = new Contacto(
        Date.now(),
        action.payload.nombre,
        action.payload.image,
        action.payload.telefono,
      );
      return { ...state, contactos: state.contactos.concat(newContacto) };
    case LOAD_CONTACTOS:
      return {
        ...state,
        contactos: action.contactos.map(
          item =>
            new Contacto(
              item.id.toString(),
              item.nombre,
              item.image,
              item.telefono,
            )
        ),
      };
    default:
      return state;
  }
};
