import Head from 'next/head';
import '../styles/global.scss';
import 'antd/dist/antd.css';

import Provider from '../store';

const App = ({ Component, pageProps }) => {
   return (
      <>
         <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="Bethree-template" key="title" />
         </Head>
         <Provider>
            <Component {...pageProps} />
         </Provider>
      </>
   );
};

export default App;
