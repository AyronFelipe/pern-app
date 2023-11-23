/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
import DOMPurify from 'dompurify';
import { Link as ReactRouterLink } from 'react-router-dom';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';

import { New } from '../../../../data/news';
import { formatDateString, truncateText } from '../../../../utils';

type IMainCard = {
  item: New;
};

function MainCard(props: IMainCard) {
  const { item } = props;

  const { id, titulo, conteudo, thumbnail, url, data_hora_publicacao } = item;

  return (
    <Card maxW="xl" key={id}>
      <CardBody>
        <Center>
          <Image src={thumbnail} borderRadius="lg" />
        </Center>
        <Stack mt={6} spacing={3}>
          <Heading size="md">{titulo}</Heading>
          <Divider />
          <Text
            textAlign="justify"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(truncateText(conteudo, 230)),
            }}
          />
          <Flex justifyContent="end">
            <Tag size="md" key="md">
              {formatDateString(data_hora_publicacao)}
            </Tag>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button
            as={Link}
            variant="solid"
            bg="blue.500"
            color="white"
            href={url}
            isExternal
          >
            Link externo <ExternalLinkIcon mx="2px" />
          </Button>
          <Button
            variant="solid"
            bg="blue.700"
            color="white"
            as={ReactRouterLink}
            to={`/${id}`}
          >
            Ler notícia
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default MainCard;
