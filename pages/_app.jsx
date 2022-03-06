import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Fragment } from 'react';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AnimatePresence>
        <Navbar />
        <Component {...pageProps} />
      </AnimatePresence>
    </Fragment>
  );
}

export default MyApp;
