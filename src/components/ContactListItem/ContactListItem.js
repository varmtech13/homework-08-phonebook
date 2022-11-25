import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import {
  Button,
  ButtonGroup,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { FaUserGraduate } from 'react-icons/fa';

export const ContactListItem = ({
  contact: { id, name, number },
  onOpenModal,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteContact(id));
  return (
    <ListItem
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Text as={'span'} fontWeight={'700'}>
        <ListIcon
          as={FaUserGraduate}
          color="blackAlpha.800"
          fontSize={'20px'}
        />
        <Text as={'span'} mr={3} color={'green.700'}>
          {name}:
        </Text>{' '}
        {number}
      </Text>
      <ButtonGroup>
        <Button
          onClick={() => onOpenModal({ name, number }, id)}
          type="button"
          colorScheme={'yellow'}
        >
          <AiFillEdit />
        </Button>
        <Button onClick={handleRemove} type="button" colorScheme={'red'}>
          <AiFillDelete />
        </Button>
      </ButtonGroup>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
