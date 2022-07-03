import Button from 'components/Button';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section
      className='p-manage relative h-[calc(100vh-4rem)] w-full flex justify-evenly laptop:justify-between items-center flex-col-reverse laptop:flex-row bg-no-repeat bg-right-top'
      style={{ backgroundImage: 'url(background/bg-tablet-pattern.svg)' }}
    >
      <div className='flex flex-col items-center laptop:items-start text-center laptop:text-start'>
        <h1 className='max-w-sm text-4xl desktop:max-w-lg desktop:text-6xl font-bold leading-tight text-manage-slate-900'>
          Bring everyone together to build better products.
        </h1>
        <p className='my-8 max-w-xs'>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals view.
        </p>
        <Button>Get started</Button>
      </div>

      <div className='laptop:max-w[640px]'>
        <img src='/images/illustration-intro.svg' alt='Chart' />
      </div>
    </section>
  );
};

export default Hero;
