import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jessica McDonagh",
        email: "jmcd1978@gmail.com",
        phone: "419-376-5025",
        type: "personal",
      },
      {
        id: 2,
        name: "Norah McDonagh",
        email: "norah@gmail.com",
        phone: "419-111-1111",
        type: "personal",
      },
      {
        id: 3,
        name: "Penny McDonagh",
        email: "jpenny@gmail.com",
        phone: "419-222-2222",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filters

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
