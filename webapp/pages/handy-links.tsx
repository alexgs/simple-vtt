import styled from '@emotion/styled';
import * as env from 'env-var';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { color, space } from "../components/tokens";

const Code = styled.code({
  padding: space.xs,
  backgroundColor: color.grey,
});

interface Props {
  hasuraAdminSecret: string;
  hasuraConsolePort: number;
  traefikDashboardPort: number;
}

const HandyLinks: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Handy-dandy Links for Administrators</title>
      </Head>
      <h1>Handy-dandy Links for Administrators</h1>
      <ul>
        <li>
          Hasura admin secret: <Code>{props.hasuraAdminSecret}</Code>
        </li>
        <li>
          <a href={`http://localhost:${props.hasuraConsolePort}`} target="_blank" rel="noreferrer">
            Hasura console
          </a>
        </li>
        <li>
          <a href={`http://localhost:${props.traefikDashboardPort}`} target="_blank" rel="noreferrer">
            Traefik dashboard
          </a>
        </li>
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      hasuraAdminSecret: env.get('HASURA_GRAPHQL_ADMIN_SECRET').default('').asString(),
      hasuraConsolePort: env.get('HASURA_GRAPHQL_CONSOLE_PORT').default('8080').asPortNumber(),
      traefikDashboardPort: env.get('TRAEFIK_DASHBOARD_PORT').default('8080').asPortNumber(),
    },
  };
};

export default HandyLinks;
