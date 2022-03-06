import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import * as React from 'react';

import { globalStyles } from '../components';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </>
);

export default App;
