import { FC } from 'react';
import Button from 'components/Button';
import Link from 'components/Link';
import Nav from './components/Nav';
import NavItem from './components/NavItem';

const Header: FC = () => {
  return (
    <div className='flex items-center justify-between h-16 px-16'>
      <Link href='/'>
        <img src='/images/logo.svg' alt='Logo' />
      </Link>

      <Nav>
        <NavItem href='/pricing' title='Pricing' />
        <NavItem href='/product' title='Product' />
        <NavItem href='/abouot' title='About Us' />
        <NavItem href='/careers' title='Careers' />
        <NavItem href='/community' title='Community' />
      </Nav>

      <Button>Get started</Button>
    </div>
  );
};

export default Header;
