import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onAddContacts = (name, phone) =>
    dispatch(addContact({ name: name, number: phone }));

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
    <Card color={'green.500'} w={'md'}>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <FormControl mb={8}>
            <FormLabel>Имя</FormLabel>
            <Input
              type="text"
              fontWeight={600}
              color={'green.700'}
              value={name}
              onChange={handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </FormControl>
          <FormControl mb={8}>
            <FormLabel>Номер телефона</FormLabel>
            <Input
              type="tel"
              fontWeight={600}
              color={'green.700'}
              value={phone}
              onChange={handleChange}
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </FormControl>
          <Button type="submit" colorScheme={'green'}>
            Сохранить контакт
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
