import Link from 'next/link';
import { FC } from 'react';
import { NavItemProps } from './types';

const NavItem: FC<NavItemProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <li className='cursor-pointer hover:text-manage-zinc-500 transition'>
        {title}
      </li>
    </Link>
  );
};

export default NavItem;
