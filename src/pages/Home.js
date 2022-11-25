import { Container, Heading, Image } from '@chakra-ui/react';
import logo from '../img/1546008317_feature_image.png';

export default function Home() {
  return (
    <Container
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      justifyContent={['space-between']}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
    >
      <Heading as="h1" size="xl" noOfLines={2}>
        Моя книга контактов
      </Heading>
      <Image boxSize="50%" objectFit="cover" src={logo} alt="My contacts" />
    </Container>
  );
}
