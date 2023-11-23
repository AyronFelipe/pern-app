/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import Detail from './components/Detail';
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './components/NotFound';
import { NewsProvider } from './contexts/NewsContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: '/:newId',
    element: <Detail />,
  },
]);

function App() {
  return (
    <Box bg="gray.50">
      <NewsProvider>
        <Header />
        <RouterProvider router={router} />
      </NewsProvider>
    </Box>
  );
}

export default App;
