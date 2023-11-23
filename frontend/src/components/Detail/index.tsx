/* eslint-disable import/no-extraneous-dependencies */
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { Link as ReactRouterLink, useParams } from 'react-router-dom';

import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';

import { useNewsContext } from '../../contexts/NewsContext';
import { New } from '../../data/news';
import { formatDateString } from '../../utils';

function Detail() {
  const [newInfo, setNewInfo] = useState<New>();

  const { newId } = useParams();

  const { news } = useNewsContext();

  useEffect(() => {
    const currentNew = news.find((item) => String(item.id) === newId);
    setNewInfo(currentNew);
  }, [newId, news]);

  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        paddingTop="1rem"
        paddingLeft="4rem"
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactRouterLink} to="/">
            Início
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={ReactRouterLink} to="#">
            {newInfo?.titulo}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center paddingTop="4rem" paddingBottom="4rem">
        <Card maxW="5xl" key={newInfo?.id}>
          <CardBody>
            <Center>
              <Image src={newInfo?.imagem} borderRadius="lg" />
            </Center>
            <Stack mt={6} spacing={3}>
              <Heading size="md">{newInfo?.titulo}</Heading>
              <Flex justifyContent="end">
                <Tag size="md" key="md">
                  {formatDateString(newInfo?.data_hora_publicacao)}
                </Tag>
              </Flex>
              <Divider />
              <Text
                textAlign="justify"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    newInfo?.conteudo ? newInfo?.conteudo : ''
                  ),
                }}
              />
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </>
  );
}

export default Detail;
