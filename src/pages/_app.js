import '@/styles/globals.css';
import { Azeret_Mono } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const azaret_mono = Azeret_Mono({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={azaret_mono.className}>
      <Component {...pageProps} />
    </main>
  );
}
