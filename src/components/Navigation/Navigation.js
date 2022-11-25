import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link as={NavLink} to="/" mr={8}>
        Главная
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} to="/contacts" mr={8}>
          Контакты
        </Link>
      )}
    </nav>
  );
};
