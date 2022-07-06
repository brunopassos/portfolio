import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ChakraProvider } from "@chakra-ui/react";

import  GlobalStyle  from "./styles/global";

import Theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <GlobalStyle/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

