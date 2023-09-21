import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';

import { getContactsItems } from '../../redux/contacts/contactsSlice';
import { getFilterValue } from '../../redux/filter/filterSlice';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContactsItems);
  const filterValue = useSelector(getFilterValue);

  const filteredContacts = [
    ...contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.filter)
    ),
  ];

  console.log(filterValue.filter);
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
