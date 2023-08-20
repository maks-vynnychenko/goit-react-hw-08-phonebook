import React from 'react';

import { logoutUser } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@chakra-ui/react';

import { Container ,Text } from './HeaderUser.styled';

const HeaderUser = () => {
  const username = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
  };

  return (
    <Container>
      <Text>Welcome: {username}</Text>
      <Button marginLeft="10px" height='30px' width="100px" onClick={logOut} colorScheme="blue">
      Log out
      </Button>
    </Container>
  );
};

export default HeaderUser;