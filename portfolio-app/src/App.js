import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
    </ChakraProvider>
  );
}

export default App;
