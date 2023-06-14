import React from 'react';
import {
  ChakraProvider,
  theme,
  Divider
} from '@chakra-ui/react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Divider colorScheme="purple"/>
      <About />
      <Divider />
      <Skills />
    </ChakraProvider>
  );
}

export default App;
