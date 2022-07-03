import { FC } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Hero from 'components/pages/Hero';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Manage - Build better products</title>
      </Head>

      <Header />
      <Hero />
    </>
  );
};

export default Home;
