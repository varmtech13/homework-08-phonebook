import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';
import { Form, FormGroup, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onAddContacts = (name, phone) => dispatch(addContacts(name, phone));

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const isAdded = name =>
      contacts?.map(contact => contact.name).includes(name);

    if (isAdded(form.elements.name.value)) {
      return alert(`${form.elements.name.value} is already in contacts`);
    } else {
      onAddContacts(form.elements.name.value, form.elements.phone.value);
    }

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Man's name</Label>
        <Input
          type="text"
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
