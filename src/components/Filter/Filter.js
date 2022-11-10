import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = filter => dispatch(setStatusFilter(filter));
  return (
    <FormGroup>
      <Label>Find contact by name</Label>
      <Input
        type="text"
        value={filter}
        onChange={e => handleChangeFilter(e.target.value)}
        name="filter"
        placeholder="Enter name"
      />
    </FormGroup>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
