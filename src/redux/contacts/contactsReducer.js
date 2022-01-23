import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, removeContact } from "./contactsOperations";

//can use IMMER to mutate a copy of a state
const contactsSlice = createSlice({
  name: "contacts",
  initialState: { entities: [], isLoading: false, error: null },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => ({
      ...state,
      entities: action.payload,
      isLoading: false,
    }),
    [getContacts.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getContacts.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),

    [addContact.fulfilled]: (state, action) => ({
      ...state,
      entities: [...state.entities, action.payload],
      isLoading: false,
    }),
    [addContact.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [addContact.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),

    [removeContact.fulfilled]: (state, action) => ({
      ...state,
      entities: state.entities.filter(({ id }) => id !== action.payload),
      isLoading: false,
    }),
    [removeContact.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [removeContact.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export default contactsSlice.reducer;
