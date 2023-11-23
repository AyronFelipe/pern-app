/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';
import theme from './theme';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
