import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {user.name}
      </MenuButton>
      <MenuList>
        <MenuItem>{user.email}</MenuItem>
        <MenuItem onClick={() => dispatch(logOut())}>Выйти</MenuItem>
      </MenuList>
    </Menu>
  );
};
