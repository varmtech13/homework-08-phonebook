import { Box, List } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';

import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ onOpenModal }) => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <Box>
      <List spacing={3}>
        {contacts.map((contact, key) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onOpenModal={onOpenModal}
          />
        ))}
      </List>
    </Box>
  );
};
