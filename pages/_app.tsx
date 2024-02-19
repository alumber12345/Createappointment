import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
     
        <ThemeProvider theme={theme}>
          <CssBaseline />
       
          <Component {...pageProps} />
       
        </ThemeProvider>
    
    </>
  );
};

export default MyApp;