import Link from 'next/link';

export default function Landing() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center gap-7 h-auto w-full py-28 container-custom'>
        {/* Hero */}
        <div className='flex flex-row justify-between w-full'>
          <h1 className='font-azeret font-semibold text-xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl tracking-tight'>
            Web Developer,
            <br />
            Designer,
            <br />
            Tech Enthusiast
          </h1>
          <p className='font-azeret font-light text-sm 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm sm:text-sm text-right tracking-tight'>
            Minimalist-Driven
            <br />
            Web Developer
            <br />
            and Designer
          </p>
        </div>
        <div className='flex flex-row justify-between w-full'>
          <p className='font-azeret font-light text-sm 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm sm:text-sm tracking-tight'>
            Vue, React, <br />
            Express, <br />
            Illustrator, <br />
            Photoshop, <br />
            You name it.
          </p>
          <h1 className='font-azeret font-semibold text-xl 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-right tracking-tight'>
            Muhammad Zufar
            <br />
            Al Hafidz
          </h1>
        </div>

        {/* CTA Button */}
        <div className='flex flex-row gap-3 justify-start w-full'>
          <Link
            href='/about'
            className='flex flex-row gap-2 bg-foreground font-azeret font-semibold tracking-tight 2xl:px-8 xl:px-7 lg:px-6 md:px-5 sm:px-4 px-3 2xl:py-4 xl:py-3 lg:py-3 md:py-2 sm:py-2 py-1 rounded-md text-background 2xl:text-xl xl:text-lg lg:text-md md:text-sm sm:text-xs'
          >
            <p>About Me</p>
        </Link>
          <Link
            href='/gallery'
            className='flex flex-row gap-2 outline outline-foreground outline-1 font-azeret font-semibold tracking-tight 2xl:px-8 xl:px-7 lg:px-6 md:px-5 sm:px-4 px-3 2xl:py-4 xl:py-3 lg:py-3 md:py-2 sm:py-2 py-1 rounded-md text-foreground 2xl:text-xl xl:text-lg lg:text-md md:text-sm sm:text-xs'
          >
            <p>Gallery</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
