import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import css from "./ContactList.module.css";
import {
  getContacts,
  removeContact,
} from "../../redux/contacts/contactsOperations";
import {
  getContactsFromState,
  getFilterFromState,
} from "../../redux/contacts/contactsSelectors";

export default function ContactList() {
  const contacts = useSelector(getContactsFromState);
  const filter = useSelector(getFilterFromState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list}>
      {visibleContacts &&
        visibleContacts.map(({ name, number, id }) => (
          <li className={css.listItem} key={id}>
            {`${name}: ${number}`}
            <button
              className={css.btn}
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              Remove
            </button>
          </li>
        ))}
    </ul>
  );
}
