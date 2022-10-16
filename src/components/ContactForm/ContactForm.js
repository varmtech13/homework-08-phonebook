import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }

    // this.setState({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Вы не ввели все контактные данные');
      return;
    }

    if (Number.isNaN(+number)) {
      alert('Телефонный номер должен содержать только цифры');
      return;
    }

    addContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Man's name</Label>
        <Input
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Phone number</Label>
        <Input
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </FormGroup>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
