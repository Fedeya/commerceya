import { AppProps } from 'next/app';
import Navigation from '../components/navigation';
import Global from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Global />
      <Navigation />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
