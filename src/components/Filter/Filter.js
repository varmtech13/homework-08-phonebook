import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';
import { FormControl, Heading, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = filter => dispatch(setStatusFilter(filter));
  return (
    <FormControl mb={10} borderBottom={'1px'} pb={2}>
      <Heading as={'h6'} size="md" mb={2}>
        Найти контакт по имени
      </Heading>
      <Input
        type="text"
        value={filter}
        onChange={e => handleChangeFilter(e.target.value)}
        name="filter"
        placeholder="Введите имя"
      />
    </FormControl>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
