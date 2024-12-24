import Image from 'next/image';

export default function About() {
  return (
    <main>
      <section className='px-4 py-3 md:px-20 md:py-16 lg:px-40 lg:py-24 xl:px-80 xl:py-32'>
        <h1 className='mb-10'>About Me?</h1>

        {/* Image */}
        <div className='relative'>
          <Image
            src='/images/about/background.webp'
            height={200}
            width={600}
            alt='background'
            className='absolute top-0 left-0 w-full h-full py-4 object-cover z-0 rounded-lg opacity-30'
          />
          <Image
            src='/images/about/me.webp'
            height={200}
            width={200}
            alt='me'
            className='relative rounded-full layout-fill z-10'
          />
        </div>

        {/* Description */}
        <h1 className='mt-10 text-4xl font-bold tracking-tight'>
          Muhammad Zufar Al Hafidz
        </h1>
        <p className='tracking-tight mt-2'>
          Is my formal Name. I began my programming journey back in 2021,
          creating my own Discord Bot using Youtube Tutorials. Since then,
          countless (not really) projects have been made, from basic landing
          page to full-stack website using ExpressJS.
        </p>
        <p className='tracking-tight mt-6'>
          I am a self-taught programmer, until i began my Compsci degree at ITS,
          Surabaya. My first (frontend) framework interest was Nuxt + Vue, but
          nowadays i&apos;m also capable of using Next + React too.
        </p>
        <p className='tracking-tight mt-6'>
          Currently as stated before, i&apos;m an Undergraduate Informatics
          Engineering Student at Institut Teknologi Sepuluh Nopember (ITS)
          Surabaya, batch 2023. On free time, i usually create mini projects
          such as imagebox for my manga website.
        </p>
        <p className='tracking-tight mt-6'>
          My hobby is to procasinate, watching Anime, and create mini projects.
        </p>

        {/* Social Media Links */}
        <div className='flex flex-row gap-3 mt-6'>
          <a
            href='https://instagram.com/_faralha'
            target='_blank'
            className='underline px-4 py-2 bg-foreground text-background hover:bg-transparent hover:outline hover:outline-foreground hover:text-current rounded-md transition-color duration-200'
          >
            Instagram
          </a>
          <a
            href='https://github.com/faralha'
            target='_blank'
            className='underline px-4 py-2 bg-foreground text-background hover:bg-transparent hover:outline hover:outline-foreground hover:text-current rounded-md transition-color duration-200'
          >
            Github
          </a>
        </div>
      </section>
    </main>
  );
}
