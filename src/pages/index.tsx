import { FC } from 'react';
import Head from 'next/head';
import Header from 'components/Header';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Manage - Build better products</title>
      </Head>

      <Header />
    </>
  );
};

export default Home;
