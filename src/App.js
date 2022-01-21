import "./App.css";
import Form from "./components/Forma/Forma";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <>
      <section className="wrapper">
        <h1 className="title">Phonebook</h1>
        <Form />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </>
  );
}

export default App;
