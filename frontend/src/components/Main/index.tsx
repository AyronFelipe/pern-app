import { useEffect, useState } from 'react';

import {
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

import { New } from '../../data/news';
import truncateText from '../../utils';
import MainCard from './components/MainCard';

function Main() {
  const [news, setNews] = useState<New[]>();

  useEffect(() => {
    async function getNews(): Promise<void> {
      const response = await fetch(
        `${import.meta.env.VITE_MAIN_HOST}/api/v1/news`
      );
      const result = await response.json();
      setNews(result);
    }
    getNews();
  }, []);

  return (
    <Container maxW="container.xl">
      <SimpleGrid
        columns={{ md: 2 }}
        spacing={10}
        paddingTop="5rem"
        paddingBottom="5rem"
      >
        {news?.map((item) => (
          <MainCard item={item} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Main;
