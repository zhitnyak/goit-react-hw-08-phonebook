import axios from "axios";

axios.defaults.baseURL = "https://61e31726fbee6800175eaf9c.mockapi.io";

export const fetchContacts = async () => {
  return axios.get("/contacts").then((response) => {
    return response.data;
  });
};
export const addContact = async (contact) => {
  console.dir(contact);
  return axios.post("/contacts", contact).then(({ data }) => data);
};

export const deleteContact = async (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
};
