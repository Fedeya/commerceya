import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';

import Navigation from '../components/navigation';
import Global from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Commerceya</title>
      </Head>
      <Global />
      <Navigation />
      {loading ? <p>Loading...</p> : <Component {...pageProps} />}
    </>
  );
};

export default App;
