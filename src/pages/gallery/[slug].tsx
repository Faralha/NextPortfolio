import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Image from 'next/legacy/image';
import { useEffect, useRef } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function GalleryItem({ item }: { item: GalleryItem }) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${offset * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='container-small relative h-screen'>
      <div className='absolute inset-0 z-0 parallax' ref={parallaxRef}>
        <Image
          src={item.image}
          alt={item.title}
          layout='fill'
          objectFit='cover'
          className='opacity-10 blur-lg select-none'
          draggable='false'
        />
      </div>
      <section className='relative z-10 p-8'>
        <h1 className='text-5xl tracking-tight font-bold'>{item.title}</h1>
        <p>{item.description}</p>
      </section>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'src/posts/gallery.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const galleryItems = JSON.parse(jsonData);

  const paths = galleryItems.map((item:GalleryItem) => ({
    params: { slug: item.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'src/posts/gallery.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const galleryItems = JSON.parse(jsonData);
  const item = galleryItems.find((item:GalleryItem) => params && item.id.toString() === params.slug);

  return { props: { item } };
};