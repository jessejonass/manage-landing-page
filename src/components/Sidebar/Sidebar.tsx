import classNames from 'classnames';
import Link from 'components/Link';
import { FC } from 'react';
import { SidebarProps } from './types';

const Sidebar: FC<SidebarProps> = ({ sidebarIsOpen }) => {
  return (
    <div
      className={classNames(
        'py-12 px-8 top-0 left-0 w-[80vw] bg-manage-zinc-500 text-manage-zinc-100 fixed h-full ease-in-out duration-300',
        {
          '-translate-x-full': !sidebarIsOpen,
          'translate-x-0': sidebarIsOpen,
        }
      )}
    >
      <div className='pb-4 border-b border-manage-zinc-100'>
        <img src='/images/logo.svg' alt='Logo' />
      </div>

      <div className='mt-8 text-xl flex flex-col gap-8'>
        <Link href='#pricing'>
          <span className='font-bold cursor-pointer hover:text-manage-slate-900 transition'>
            Pricing
          </span>
        </Link>

        <Link href='#product'>
          <span className='font-bold cursor-pointer hover:text-manage-slate-900 transition'>
            Pricing
          </span>
        </Link>

        <Link href='#about'>
          <span className='font-bold cursor-pointer hover:text-manage-slate-900 transition'>
            About us
          </span>
        </Link>

        <Link href='#careers'>
          <span className='font-bold cursor-pointer hover:text-manage-slate-900 transition'>
            Careers
          </span>
        </Link>

        <Link href='#community'>
          <span className='font-bold cursor-pointer hover:text-manage-slate-900 transition'>
            Community
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
