import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import * as React from 'react';

import { globalStyles } from '../components';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  const { session, ...otherProps } = pageProps;
  return (
    <>
      <Global styles={globalStyles} />
      <SessionProvider session={session}>
        <Component {...otherProps} />
      </SessionProvider>
    </>
  );
}

export default App;
