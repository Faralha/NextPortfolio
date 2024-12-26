import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card({ image, title, description }: CardProps) {
  return (
    <main>
      <section className='outline outline-zinc-700 outline-1 rounded-md shadow-md overflow-hidden h-80 w-[20rem] hover:scale-105 transition-transform duration-200'>
        <Image
          height={200}
          width={200}
          src={image}
          alt={title}
          className='w-full h-48 object-cover'
        />

        <div className='p-4'>
          <h1 className="text-xl font-bold tracking-tighter leading-7">{title}</h1>
          <p className="leading-5 opacity-80 font-sans line-clamp-3">{description}</p>
        </div>
      </section>
    </main>
  );
}