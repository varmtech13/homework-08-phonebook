import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactModal } from 'components/ContactModal/ContactModal';
import { Card, CardBody, Container, Image } from '@chakra-ui/react';
import Search from '../img/246827585.jpg';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editContact, setEditContact] = useState({});

  const handleOpenModal = (contact, id) => {
    setIsOpenModal(true);
    setEditContact({ contact, id });
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      justifyContent={['space-between']}
      display={'flex'}
      flexDirection={'row'}
      color={'green.500'}
    >
      <ContactForm />
      <Image
        boxSize="300px"
        maxW={'100%'}
        objectFit="cover"
        src={Search}
        alt="My contacts"
      />
      <Card color={'green.500'} w={'md'}>
        <CardBody>
          <Filter />
          <div>{isLoading && 'Request in progress...'}</div>
          <ContactList onOpenModal={handleOpenModal} />
          {isOpenModal && (
            <ContactModal
              onCloseModal={setIsOpenModal}
              contactData={editContact}
            />
          )}
        </CardBody>
      </Card>
    </Container>
  );
}
