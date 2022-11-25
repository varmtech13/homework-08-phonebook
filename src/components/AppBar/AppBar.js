import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Container, Stack } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack
      spacing={4}
      wrap="nowrap"
      direction={'row'}
      w={{ base: '40%', md: '100%' }}
      align={['center', 'center', 'flex-start', 'flex-start']}
      color={'green.500'}
      h={'80px'}
      fontWeight="bold"
      fontFamily={'Roboto'}
      mb={8}
    >
      <Container
        maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
        justifyContent={['flex-end']}
        display={'flex'}
        alignItems={'center'}
        h={'80px'}
        borderBottom={'1px'}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Stack>
  );
};
