import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-background text-foreground'>
      <div className='container mx-auto py-8'>
        <div className='flex justify-center items-center gap-2'>
          <div className='flex gap-1'>
            <a href='https://instagram.com/_faralha' target='_blank'>
              <PiInstagramLogoFill size={22} />
            </a>
            <a href='https://github.com/faralha' target='_blank'>
              <FaGithub size={22} />
            </a>
          </div>
          <p className='text-left tracking-tight font-light'>
            © 2024 Zufaralha
          </p>
        </div>
      </div>
    </footer>
  );
}
