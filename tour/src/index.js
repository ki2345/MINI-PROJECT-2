
// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config({ path: "./config.env" })
// } 

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react'

import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <ScrollToTop/>
      <App />
    </ChakraProvider>
    </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

