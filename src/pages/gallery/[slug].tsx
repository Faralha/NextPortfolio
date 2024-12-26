import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Image from 'next/legacy/image';

import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface ContentItem {
  paragraph: string;
  image?: string[];
}
interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
  content?: ContentItem[];
}

export default function GalleryItem({ item }: { item: GalleryItem }) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <main className='container-small relative h-auto'>
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
      <div className='relative z-10 p-8'>
        <h1 className='text-5xl tracking-tight font-bold'>{item.title}</h1>
        <p className='font-sans opacity-60 mt-2'>{item.description}</p>
        {/* Content */}
        <section className='mt-10'>
          {item.content &&
            item.content.map((contentItem, index) => (
              <div key={index} className='mt-10'>
                <p className='text-justify font-sans text-xl opacity-80'>
                  {contentItem.paragraph}
                </p>
                {/* Embla Carousel */}
                {contentItem.image && (
                  <div className='mt-10'>
                    <div className='embla' ref={emblaRef}>
                      <div className='embla__container'>
                        {contentItem.image.map((imgSrc, imgIndex) => (
                          <div className='embla__slide' key={imgIndex}>
                            <Image
                              src={imgSrc}
                              alt={`Content image ${imgIndex + 1}`}
                              width={600}
                              height={600}
                              
                            />
                          </div>
                        ))}
                      </div>
                      <div className='flex justify-end'>
                        <button className='embla__prev' onClick={scrollPrev}>
                          <FaCaretLeft size={30} />
                        </button>
                        <button className='embla__next' onClick={scrollNext}>
                          <FaCaretRight size={30} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </section>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'src/posts/gallery.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const galleryItems = JSON.parse(jsonData);

  const paths = galleryItems.map((item: GalleryItem) => ({
    params: { slug: item.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'src/posts/gallery.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const galleryItems = JSON.parse(jsonData);
  const item = galleryItems.find(
    (item: GalleryItem) => params && item.id.toString() === params.slug
  );

  return { props: { item } };
};
