import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const styledLink = {
  borderBottom: '2px solid #ff872c',
};

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink to="/" exact activeStyle={styledLink}>
          Listagem
        </NavLink>
        <NavLink to="/import" exact activeStyle={styledLink}>
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
