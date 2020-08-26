import Link from 'next/link';
import { Nav, NavList, NavItem, NavBrand } from './styles';
import Search from '../search';

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Link href="/">
        <NavBrand>Commerceya</NavBrand>
      </Link>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>Products</NavItem>
        <NavItem>Brands</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
      <Search />
    </Nav>
  );
};

export default Navigation;
