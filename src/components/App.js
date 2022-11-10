import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Phonebook, AddBlock, ContactBlock, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Phonebook>
      <AddBlock>
        <Title>Phonebook</Title>
        <ContactForm />
      </AddBlock>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactBlock>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </ContactBlock>
    </Phonebook>
  );
};
