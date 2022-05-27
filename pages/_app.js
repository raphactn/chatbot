import '../styles/globals.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
    <React. Fragment>
    <CssBaseline />
    { <Component {...pageProps} />}
  </React. Fragment>
  )
  
}

export default MyApp
