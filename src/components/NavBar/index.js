import React, { useState } from 'react';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';

import NavLink from '@material-tailwind/react/NavLink';
import Icon from '@material-tailwind/react/Icon';

export default function NavBar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="blue" navbar>
      <NavbarContainer className={`flex row-span-1`}>
        <NavbarWrapper>
          <NavbarBrand>Pokedex</NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav className={`row-auto`}>
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
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
