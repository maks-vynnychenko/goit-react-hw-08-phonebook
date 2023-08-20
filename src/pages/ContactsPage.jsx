import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { HeaderContacts } from 'components/commonStyle.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Contacts = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if (!isLoggedIn) return <Navigate to="/" />;
  return (
    <>
      <main>
        <ContactForm />

        <HeaderContacts>Contacts</HeaderContacts>
        <Filter />
        <ContactList />
      </main>
    </>
  );
};

export default Contacts;