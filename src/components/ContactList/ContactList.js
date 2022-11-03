import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ListBlock, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts).contactsReducer;
  const filter = useSelector(getFilter);

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase()?.includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <ListBlock>
      <List>
        {visibleContacts.map((contact, key) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </ListBlock>
  );
};
