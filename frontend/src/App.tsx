import { Box } from '@chakra-ui/react';

import Header from './components/Header';
import Main from './components/Main';

function App(): JSX.Element {
  return (
    <Box bg="gray.50">
      <Header />
      <Main />
    </Box>
  );
}

export default App;
