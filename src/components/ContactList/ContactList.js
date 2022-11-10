import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';

import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ListBlock, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ListBlock>
      <List>
        {contacts.map((contact, key) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </ListBlock>
  );
};
