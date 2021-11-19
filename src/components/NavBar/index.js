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
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar color="blue">
      <NavbarContainer>
        <NavbarWrapper className="flex row-span-1 justify-between">
          <NavbarBrand>POKEDEX</NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenMenu(!openMenu)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openMenu}>
          <Nav>
            <NavLink href="/" active="light" ripple="light">
              <Icon name="language" size="xl" />
              Discover
            </NavLink>
            <NavLink href="login" ripple="light">
              <Icon name="account_circle" size="xl" />
              Login
            </NavLink>
            <NavLink href="dashboard" ripple="light">
              <Icon name="settings" size="xl" />
              Dashboard
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
