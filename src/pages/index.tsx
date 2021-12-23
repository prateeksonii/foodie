import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBg from "../assets/images/bg.jpg";

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='flex flex-col justify-center p-60'>
        <h1 className='font-display text-9xl tracking-wider'>Foodie</h1>
        <div className='p-4' />
        <p className='font-body text-2xl'>Find the best recipes for you</p>
        <div className='p-4' />
        <Link href='/home' passHref>
          <a className='bg-primary w-fit px-8 py-4 text-white font-bold text-lg rounded-lg cursor-pointer'>
            Get Started
          </a>
        </Link>
      </div>
      <div className='absolute top-0 left-0 h-screen w-screen -z-10'>
        <Image
          src={HeroBg}
          alt='Background'
          layout='fill'
          className='object-right-bottom object-cover'
        />
      </div>
    </div>
  );
};

export default Home;
