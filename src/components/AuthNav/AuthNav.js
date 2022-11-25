import { Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <nav>
      <Link as={NavLink} to="/register" mr={8}>
        Зарегистрироваться
      </Link>
      <Link as={NavLink} to="/login" mr={8}>
        Войти
      </Link>
    </nav>
  );
};
