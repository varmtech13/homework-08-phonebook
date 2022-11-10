import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Form, FormGroup, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onAddContacts = (name, phone) =>
    dispatch(addContact({ name: name, phone: phone }));

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isAdded = name =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      );

    if (isAdded(name).length > 0) {
      return alert(`${name} is already in contacts`);
    } else {
      onAddContacts(name, phone);
    }

    if (!name || !phone) {
      alert('Вы не ввели все контактные данные');
      return;
    }

    if (Number.isNaN(+phone)) {
      alert('Телефонный номер должен содержать только цифры');
      return;
    }

    setName('');
    setPhone('');
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
          value={phone}
          onChange={handleChange}
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </FormGroup>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
