import fs from 'fs';
import path from 'path';

import Card from '@/components/gallery/card';
import Link from 'next/link';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Gallery({
  galleryItems,
}: {
  galleryItems: GalleryItem[];
}) {
  return (
    <main>
      <section className='container-custom py-20'>
        <h1 className='text-5xl tracking-tighter'>Design Gallery</h1>
        <p className='tracking-tighter mt-2 mb-10'>
          A Gallery of Design i made, including some brief history explanation.
        </p>
        <ul className='grid grid-rows-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {galleryItems.map((item) => (
            <Link href={`/gallery/${item.id}`} key={item.id}>
              <li key={item.id}>
                <Card
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'src/posts', 'gallery.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const galleryItems = JSON.parse(jsonData);

  return { props: { galleryItems } };
}
