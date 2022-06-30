import { Spin as Hamburger } from 'hamburger-react';
import { FC, useState } from 'react';
import Button from 'components/Button';
import Link from 'components/Link';
import Nav from './components/Nav';
import NavItem from './components/NavItem';

const Header: FC = () => {
  const [buttonMenuIsOpen, setButtonMenuIsOpen] = useState(false);

  return (
    <div className='flex items-center justify-between h-16 px-4 tablet:px-16 transition-all'>
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

      <Button className='hidden tablet:block'>Get started</Button>
      <Button transparent className='tablet:hidden -mr-4'>
        <Hamburger
          size={24}
          toggled={buttonMenuIsOpen}
          toggle={() => setButtonMenuIsOpen(!buttonMenuIsOpen)}
        />
      </Button>
    </div>
  );
};

export default Header;
