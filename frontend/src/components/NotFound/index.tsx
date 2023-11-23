/* eslint-disable import/no-extraneous-dependencies */
import { Link as ReactRouterLink } from 'react-router-dom';

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

function NotFound() {
  return (
    <Box p={8} paddingTop="15.4rem" paddingBottom="15.4rem">
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1" size="2xl" mb={4}>
          404 - Não encontrado
        </Heading>
        <Text fontSize="xl" mb={8}>
          A página que você precura não existe.
        </Text>
        <Button as={ReactRouterLink} to="/" colorScheme="blue" size="lg">
          Início
        </Button>
      </Flex>
    </Box>
  );
}

export default NotFound;
