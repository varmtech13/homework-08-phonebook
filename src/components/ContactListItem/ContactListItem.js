import PropTypes from 'prop-types';
import { Item, Data, Button, Name } from './ContactListItem.styled';
import { deleteContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteContacts(id));
  return (
    <Item>
      <Data>
        <Name>{name}:</Name> {phone}
      </Data>
      <Button onClick={handleRemove} type="button">
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
