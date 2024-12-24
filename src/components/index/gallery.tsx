import Image from "next/legacy/image";

export default function Gallery() {
  return (
    <main className='h-auto w-full'>
      <section className='grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 '>
        {/* Image Wrapper */}
        <div className='w-full aspect-w-1 aspect-h-1 opacity-25 hover:opacity-100 transition-opacity duration-300'>
          <Image
            src='/images/gallery/design_1.webp'
            layout='fill'
            objectFit='cover'
            alt='design-1'
          />
        </div>
        <div className='w-full aspect-w-1 aspect-h-1 opacity-25 hover:opacity-100 transition-opacity duration-300'>
          <Image
            src='/images/gallery/design_2.webp'
            layout='fill'
            objectFit='cover'
            alt='design-2'
          />
        </div>
        <div className='w-full aspect-w-1 aspect-h-1 opacity-25 hover:opacity-100 transition-opacity duration-300'>
          <Image
            src='/images/gallery/design_3.webp'
            layout='fill'
            objectFit='cover'
            alt='design-3'
          />
        </div>
        <div className='w-full aspect-w-1 aspect-h-1 opacity-25 hover:opacity-100 transition-opacity duration-300'>
          <Image
            src='/images/gallery/design_4.webp'
            layout='fill'
            objectFit='cover'
            alt='design-4'
          />
        </div>
        <div className='w-full aspect-w-1 aspect-h-1 opacity-25 hover:opacity-100 transition-opacity duration-300'>
          <Image
            src='/images/gallery/design_5.webp'
            layout='fill'
            objectFit='cover'
            alt='design-5'
          />
        </div>
        <div className='w-full aspect-w-1 aspect-h-1 opacity-25 hover:opacity-100 transition-opacity duration-300'>
          <Image
            src='/images/gallery/design_6.webp'
            layout='fill'
            objectFit='cover'
            alt='design-6'
          />
        </div>
        <div className='w-full aspect-w-1 aspect-h-1 opacity-25 hover:opacity-100 transition-opacity duration-300'>
          <Image
            src='/images/gallery/website_1.webp'
            layout='fill'
            objectFit='cover'
            alt='website-1'
          />
        </div>
        <div className='w-full aspect-w-1 aspect-h-1 opacity-25 hover:opacity-100 transition-opacity duration-300'>
          <Image
            src='/images/gallery/website_2.webp'
            layout='fill'
            objectFit='cover'
            alt='website-2'
          />
        </div>
      </section>
    </main>
  );
}
