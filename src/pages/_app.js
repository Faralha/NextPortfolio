import '@/styles/globals.css';
import { Azeret_Mono } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import LoadingIndicator from '@/components/loadingIndicator';

const azaret_mono = Azeret_Mono({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-40'>
        <Navbar />
        <LoadingIndicator />
      </div>
      <main
        className={azaret_mono.className}
        style={{
          marginTop: '4.5rem',
          background: 'linear-gradient(90deg, #1a1a1a 0%, #000000 100%)',
        }}
      >
        <Component {...pageProps} />
        <Footer className="z-10" />
      </main>
    </>
  );
}
