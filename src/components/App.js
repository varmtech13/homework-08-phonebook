import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Phonebook, AddBlock, ContactBlock, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
      <ContactBlock>
        <Title>Contacts</Title>
        <Filter />
        {isLoading && !error && (
          <b>
            Request in progress...
            <AiOutlineLoading3Quarters
              size="22"
              color="#E21C1C"
              marginRight="10px"
            />
          </b>
        )}
        <ContactList />
      </ContactBlock>
    </Phonebook>
  );
};
