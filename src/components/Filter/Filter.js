import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FormGroup>
    <Label>Find contact by name</Label>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      name="filter"
      placeholder="Enter name"
    />
  </FormGroup>
);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
