import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card({ image, title, description }: CardProps) {
  return (
    <main>
      <section className='bg-zinc-950 rounded-md shadow-md overflow-hidden h-80 w-[20rem]'>
        <Image
          height={200}
          width={200}
          src={image}
          alt={title}
          className='w-full h-48 object-cover'
        />

        <div className='p-4'>
          <h1 className="text-xl font-bold tracking-tight">{title}</h1>
          <p className="tracking-tighter font-mono line-clamp-3">{description}</p>
        </div>
      </section>
    </main>
  );
}