import {
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      display={'flex'}
      alignItems={'center'}
      m={'auto'}
    >
      <Card color={'green.500'} w={'md'}>
        <CardBody>
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormControl mb={8}>
              <FormLabel>
                Введите адрес электронной почты
                <Input type="email" name="email" />
              </FormLabel>
            </FormControl>
            <FormControl mb={8}>
              <FormLabel>
                Пароль
                <InputGroup size="md">
                  <Input type={show ? 'text' : 'password'} name="password" />
                  <InputRightElement width="4.5rem">
                    <Button size="sm" onClick={handleClick} mr={2}>
                      {show ? 'Скрыть' : 'Показать'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormLabel>
            </FormControl>
            <Button type="submit" colorScheme={'green'}>
              Войти
            </Button>
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};
