import ContactList from "../../components/ContactList/ContactList";
import Form from "../../components/Form/Form";
import Filter from "../../components/Filter/Filter";

export default function ContactsView() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
