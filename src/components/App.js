import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Phonebook, AddBlock, ContactBlock, Title } from './App.styled';

import { v4 as uuidv4 } from 'uuid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      return JSON.parse(contacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, contact]);
  };

  const handleRemove = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getContacts();

  return (
    <Phonebook>
      <AddBlock>
        <Title>Phonebook</Title>
        <ContactForm addContact={addContact} />
      </AddBlock>
      <ContactBlock>
        <Title>Contacts</Title>
        <Filter onChange={handleFilterChange} value={filter} />
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={handleRemove}
        />
      </ContactBlock>
    </Phonebook>
  );
};
