import Head from 'next/head';
import Landing from '@/components/index/landing';
import Gallery from '@/components/index/gallery';
import Article from '@/components/index/article';

export default function Home() {
  return (
    <>
      <Head>
        <title>Faralha&apos;s Portfolio</title>
        <meta name='description' content='Muhammad Zufar Al Hafidz' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Landing />
        <Gallery />
        <Article />
      </main>
    </>
  );
}