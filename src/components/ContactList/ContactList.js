import { useSelector, useDispatch } from "react-redux";
import css from "./ContactList.module.css";
import { useEffect } from "react";
import {
  getContacts,
  removeContact,
} from "../../redux/contacts/contacts-operations";
import {
  getContactsFromState,
  getFilterFromState,
} from "../../redux/contacts/contacts-selectors";

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
        visibleContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
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
