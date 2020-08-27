import { useState } from 'react';
import Link from 'next/link';
import {
  Nav,
  NavList,
  NavItem,
  NavBrand,
  FavoriteIcon,
  CartIcon,
  IconContainer,
  Quantity,
  IconGroup,
  Menu,
  NavLink
} from './styles';
import Search from '../search';

const Navigation: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Nav>
      <Link href="/" passHref>
        <NavBrand>Commerceya</NavBrand>
      </Link>
      <NavList opened={opened}>
        <NavItem>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/products" passHref>
            <NavLink>Products</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/brands" passHref>
            <NavLink>Brands</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact" passHref>
            <NavLink>Contact</NavLink>
          </Link>
        </NavItem>
      </NavList>
      <Search />
      <IconGroup>
        <IconContainer>
          <FavoriteIcon />
          <Quantity>02</Quantity>
        </IconContainer>
        <IconContainer visible>
          <CartIcon />
          <Quantity>02</Quantity>
        </IconContainer>
        <Menu onClick={() => setOpened(!opened)} />
      </IconGroup>
    </Nav>
  );
};

export default Navigation;
