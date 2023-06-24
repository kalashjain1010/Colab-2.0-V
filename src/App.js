import Navbar from "./components/Navbar";
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <LandingPage/>
    </ChakraProvider>
  );
}

export default App;
