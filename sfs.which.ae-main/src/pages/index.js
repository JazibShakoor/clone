import Head from 'next/head';
import HomePage from './home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dmaxx Real Estate - Properties in Dubai </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <HomePage />
        </div>
      </main>
    </>
  );
}
