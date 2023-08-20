import HeaderUser from 'components/HeaderUser/HeaderUser';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';

const HeaderNav = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Breadcrumb>
      <BreadcrumbItem>
ʼ          <NavLink to="/">Home</NavLink>
ʼ      </BreadcrumbItem>

      {isLoggedIn ? (
        <>
          <BreadcrumbItem>
ʼ              <NavLink to="/contacts">Contacts</NavLink>
ʼ          </BreadcrumbItem>
          <HeaderUser />
        </>
      ) : (
        <>
          <Breadcrumb>
            <BreadcrumbItem>
ʼ                <NavLink to="/login">Log in</NavLink>
ʼ            </BreadcrumbItem>
            <BreadcrumbItem>
ʼ                <NavLink to="/register">Register</NavLink>
ʼ            </BreadcrumbItem>
          </Breadcrumb>
        </>
      )}
    </Breadcrumb>


  );
};

export default HeaderNav;