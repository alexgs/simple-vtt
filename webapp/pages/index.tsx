import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';

import { color } from '../components/tokens';

const Accent = styled.span({
  color: color.accent,
});

const Chill = styled.span({
  color: color.chill,
});

const Pop = styled.span({
  color: color.pop,
});

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Simple VTT</title>
      </Head>
      <div>Welcome to Next.js!</div>
      <div>
        This is an <Accent>example of the accent</Accent> color.
      </div>
      <div>
        This is an <Chill>example of the chill</Chill> color.
      </div>
      <div>
        This is an <Pop>example of the pop</Pop> color.
      </div>
    </>
  );
};

export default HomePage;
