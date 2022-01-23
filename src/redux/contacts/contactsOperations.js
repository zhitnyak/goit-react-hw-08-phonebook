import * as jsonServerApi from "./contactsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await jsonServerApi.fetchContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    const contacts = await jsonServerApi.addContact({ name, number });
    return contacts;
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id) => {
    await jsonServerApi.deleteContact(id);
    return id;
  }
);
