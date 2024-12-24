import { MdArrowOutward } from 'react-icons/md';

export default function Landing() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center gap-7 h-screen w-full px-32'>
        
        {/* Hero */}
        <div className='flex flex-row justify-between w-full'>
          <h1 className='font-azeret font-semibold text-5xl'>
            Web Developer,
            <br />
            Designer,
            <br />
            Tech Enthusiast
          </h1>
          <p className='font-azeret font-light text-2xl text-right'>
            Minimalist-Driven
            <br />
            Web Developer
            <br />
            and Designer
          </p>
        </div>
        <div className='flex flex-row justify-between w-full'>
          <p className='font-azeret font-light text-2xl'>
            Vue, React <br />
            Express, <br />
            Illustrator, <br />
            Photoshop, <br />
            You name it.
          </p>
          <h1 className='font-azeret font-semibold text-7xl text-right'>
            Muhammad Zufar
            <br />
            Al Hafidz
          </h1>
        </div>

        {/* CTA Button */}
        <div className='flex flex-row gap-3 justify-start w-full'>
          <button className='flex flex-row gap-2 bg-foreground font-azeret font-semibold px-5 py-2 rounded-md text-background'>
            <MdArrowOutward size={23} />
            Contact Me
          </button>
          <button className="flex flex-row gap-2 outline outline-foreground outline-1 font-azeret font-semibold px-5 py-2 rounded-md text-foreground">
            Gallery
          </button>
        </div>
      </section>
    </div>
  );
}
