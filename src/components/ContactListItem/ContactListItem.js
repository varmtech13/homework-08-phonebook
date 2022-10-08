import PropTypes from 'prop-types';
import { Item, Data, Button, Name } from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { name, number },
  onRemoveContact,
}) => {
  return (
    <Item>
      <Data>
        <Name>{name}:</Name> {number}
      </Data>
      <Button onClick={onRemoveContact} type="button">
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onRemoveContact: PropTypes.func.isRequired,
};
