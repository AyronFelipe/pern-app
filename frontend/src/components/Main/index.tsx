import { Container, SimpleGrid } from '@chakra-ui/react';

import { useNewsContext } from '../../contexts/NewsContext';

import MainCard from './components/MainCard';

function Main() {
  const { news } = useNewsContext();

  return (
    <Container maxW="container.xl">
      <SimpleGrid
        columns={{ md: 2 }}
        spacing={10}
        paddingTop="5rem"
        paddingBottom="5rem"
      >
        {news?.map((item) => (
          <MainCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Main;
