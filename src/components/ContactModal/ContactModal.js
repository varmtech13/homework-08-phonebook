import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

export const ContactModal = ({ contactData, onCloseModal }) => {
  const { contact, id } = contactData;
  const dispatch = useDispatch();

  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Изменить данные контакта</ModalHeader>
        <ModalCloseButton onClick={e => onCloseModal(false)} />
        <ModalBody>
          <Formik
            initialValues={{ name: contact.name, number: contact.number }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                actions.setSubmitting(false);
                const updateContact = {
                  name: values.name,
                  number: values.number,
                };
                dispatch(editContact({ id: id, updateContact: updateContact }));
                onCloseModal(false);
              }, 1000);
            }}
          >
            {props => (
              <Form>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl mb={8}>
                      <FormLabel htmlFor="name"></FormLabel>
                      <Input
                        {...field}
                        className="input"
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        placeholder="Имя"
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="number">
                  {({ field, form }) => (
                    <FormControl mb={8}>
                      <FormLabel htmlFor="number"></FormLabel>
                      <Input
                        {...field}
                        className="input"
                        id="number"
                        type="text"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        placeholder="Номер телефона"
                      />
                    </FormControl>
                  )}
                </Field>

                <Button
                  className="button"
                  type="submit"
                  isLoading={props.isSubmitting}
                  colorScheme={'green'}
                >
                  Сохранить
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
