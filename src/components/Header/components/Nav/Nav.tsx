import { FC } from 'react';

const Nav: FC<{ children: JSX.Element[] }> = ({ children, ...props }) => {
  return (
    <ul
      className='h-full hidden laptop:flex items-center gap-8 text-md'
      {...props}
    >
      {children}
    </ul>
  );
};

export default Nav;
