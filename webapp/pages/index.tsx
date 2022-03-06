import React from 'react';
import styled from '@emotion/styled';

const Welcome = styled.div({
  color: 'fuchsia',
});

const HomePage: React.FC = () => {
  return <Welcome>Welcome to Next.js!</Welcome>;
};

export default HomePage;
