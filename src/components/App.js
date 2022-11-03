import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Phonebook, AddBlock, ContactBlock, Title } from './App.styled';

export const App = () => {
  return (
    <Phonebook>
      <AddBlock>
        <Title>Phonebook</Title>
        <ContactForm />
      </AddBlock>
      <ContactBlock>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </ContactBlock>
    </Phonebook>
  );
};
