import styled from '@emotion/styled';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #000;
  padding: 1rem;
`;

export const NavBrand = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled.li`
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    color: var(--red);
  }
`;

export const IconGroup = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  border-radius: 30px;
  border: 1px solid #eee;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  position: relative;
`;

export const FavoriteIcon = styled(FaHeart)`
  width: 19px;
  height: 19px;
  color: #6c6a6a;
`;

export const CartIcon = styled(FaShoppingCart)`
  width: 19px;
  height: 19px;
  color: #6c6a6a;
`;

export const Quantity = styled.p`
  position: absolute;
  right: -10px;
  top: 0;
  color: #fff;
  text-align: center;
  width: 25px;
  height: 25px;
  border-radius: 30px;
  font-size: 12px;
  line-height: 25px;
  background-color: #00b1ff;
`;
