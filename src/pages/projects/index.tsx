import fs from 'fs';
import path from 'path';

import Card from '@/components/gallery/card';
import Link from 'next/link';

interface ProjectsItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Projects({
  ProjectsItems,
}: {
  ProjectsItems: ProjectsItem[];
}) {
  return (
    <main>
      <section className='container-custom py-20'>
        <h1 className='text-5xl tracking-tighter'>Projects</h1>
        <p className='tracking-tighter mt-2 mb-10'>
          Any Projects from Clients Work to Mini Personal Projects i made.
        </p>
        <ul className='grid grid-rows-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {ProjectsItems.map((item) => (
            <Link href={`/projects/${item.id}`} key={item.id}>
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
  const filePath = path.join(process.cwd(), 'src/posts', 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const ProjectsItems = JSON.parse(jsonData);

  return { props: { ProjectsItems } };
}
