import { FC } from 'react';

const Nav: FC<{ children: JSX.Element[] }> = ({ children, ...props }) => {
  return (
    <ul className='hidden laptop:flex gap-8 px-4' {...props}>
      {children}
    </ul>
  );
};

export default Nav;
