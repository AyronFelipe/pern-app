import { Box, Flex, Text } from '@chakra-ui/react';

import Header from './components/Header';

const textFontSizes = [16, 18, 24, 30];

function App(): JSX.Element {
  return (
    <Box>
      <Header />
      <Flex
        as="header"
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        fontSize="3xl"
      >
        <Text fontSize={textFontSizes}>Hello World!</Text>
      </Flex>
    </Box>
  );
}

export default App;
