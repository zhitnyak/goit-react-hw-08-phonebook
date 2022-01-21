import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filter-reducer";
import contactsSlice from "./contacts/contacts-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterReducer,
  },
  devTools: composeWithDevTools,
});
export default store;
