import Image from 'next/image'
import { Tools } from '@/components/Tools';
import { Gmail } from '@/icons/Gmail';
import { Linkedin } from '@/icons/Linkedin';
import { Github } from '@/icons/Github';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-evenly w-[calc(100vw-20px)] m-auto'>
      <div id='hero' className='flex flex-col gap-8 justify-center items-center h-[calc(100vh-60px)]'>
        <div className='flex flex-col gap-8 items-center md:flex-row'>
          <Image src={'/hs.jfif'} alt='Hemanth Sreenadhuni' className='rounded-full' width={160} height={160} />
          <div>
            <h1 className='md:text-5xl text-3xl'>Hemanth Sreenadhuni</h1>
            <p className='text-xl'>A <s>kick-starting motorbike</s> self-starting programmer</p>
            <p className='text-lg'>with a knack for web dev and a mind tickled by anything<br />  under the good, ol&apos;, <span className='rounded-md p-1 font-bold bg-cover' style={{ backgroundImage: `url('/sky.jfif')` }}>blue sky</span></p>
            <div className='flex gap-2 items-center'>
              <Gmail />
              <Linkedin />
              <Github />
            </div>
          </div>
        </div>
        <div>
          <p className='text-2xl font-semibold text-center mb-4'>Tools</p>
          <Tools />
        </div>
      </div>
      <Projects />
    </main>
  )
}
