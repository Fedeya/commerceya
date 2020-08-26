import styled from '@emotion/styled';

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
