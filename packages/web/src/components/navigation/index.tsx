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
      <Link href="/">
        <NavBrand>Commerceya</NavBrand>
      </Link>
      <NavList opened={opened}>
        <NavItem>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/products">
            <NavLink>Products</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/brands">
            <NavLink>Brands</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">
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
      </IconGroup>
      <Menu onClick={() => setOpened(!opened)} />
    </Nav>
  );
};

export default Navigation;
