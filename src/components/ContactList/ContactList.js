import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ListBlock, List } from './ContactList.styled';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ListBlock>
      <List>
        {contacts.map((contact, key) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onRemoveContact={() => onRemoveContact(contact.id)}
          />
        ))}
      </List>
    </ListBlock>
  );
};

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
