import React from 'react';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';

import Nav from '@material-tailwind/react/Nav';

import NavLink from '@material-tailwind/react/NavLink';
import Icon from '@material-tailwind/react/Icon';

export default function NavBar() {
  return (
    <Navbar color="blue" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>Pokedex</NavbarBrand>
        </NavbarWrapper>

        <Nav>
          <NavLink active="light" href="/" ripple="light">
            <Icon name="language" size="xl" />
          </NavLink>
          <NavLink href="login" ripple="light">
            <Icon name="account_circle" size="xl" />
          </NavLink>
          <NavLink href="dashboard" ripple="light">
            <Icon name="settings" size="xl" />
          </NavLink>
        </Nav>
      </NavbarContainer>
    </Navbar>
  );
}
