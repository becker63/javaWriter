import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  fonts: {
    body: "Raleway",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#121212",
      },
    }),
  },

})
root.render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
      <App />
      </ChakraProvider>

</React.StrictMode>
);