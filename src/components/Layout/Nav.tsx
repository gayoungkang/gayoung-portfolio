import { styled } from "styled-components";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Nav = ({ children }: { children: ReactNode }) => (
  <NavStyle>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/contact'>Contact</Link>
    {children}
  </NavStyle>
);

export const NavStyle = styled.nav`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 50px 12px 12px 12px;
  color: ${({ theme }) => theme.colors.grey[100]};
`;

export default Nav;
