import styled from '@emotion/styled';
import { FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
  z-index: 100;
`;

export const NavBrand = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: #6c6a6a;
  cursor: pointer;
`;

export const NavList = styled.ul<{ opened: boolean }>`
  list-style: none;
  display: ${props => (props.opened ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;
  justify-content: space-around;
  align-items: flex-start;
  position: absolute;
  background-color: #fff;
  top: 82px;
  width: 90%;
  border-bottom: 1px solid #eee;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
    width: 50%;
    border: none;
  }

  @media screen and (min-width: 1100px) {
    width: 30%;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  margin: 1rem;
  display: flex;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin: 0;
    width: max-content;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  width: 100%;
  transition: 200ms ease;

  &:hover {
    color: #ff003c;
  }

  @media screen and (min-width: 1100px) {
    width: max-content;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0px;
`;

export const IconContainer = styled.div<{ visible?: boolean }>`
  border-radius: 30px;
  border: 1px solid #eee;
  width: 50px;
  height: 50px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  position: relative;
  user-select: none;

  @media screen and (min-width: 1100px) {
    display: flex;
  }
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const Menu = styled(FaBars)`
  color: #ff003c;
  width: 2rem;
  height: 2rem;
  margin-left: 1.5rem;
  cursor: pointer;
  user-select: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
