import '@/styles/globals.css';
import { Azeret_Mono } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// If loading a variable font, you don't need to specify the font weight
const azaret_mono = Azeret_Mono({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navbar />
      </div>
      <main className={azaret_mono.className} style={{ marginTop: '4rem'}}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
