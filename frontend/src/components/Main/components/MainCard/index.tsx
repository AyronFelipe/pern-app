// eslint-disable-next-line import/no-extraneous-dependencies
import DOMPurify from 'dompurify';

import {
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { New } from '../../../../data/news';
import truncateText from '../../../../utils';

type IMainCard = {
  item: New;
};

function MainCard(props: IMainCard) {
  const { item } = props;

  const { id, titulo, conteudo, thumbnail } = item;

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
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(truncateText(conteudo, 230)),
            }}
          />
        </Stack>
      </CardBody>
    </Card>
  );
}

export default MainCard;
