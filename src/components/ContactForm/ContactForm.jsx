// import contactForm from './ContactForm.module.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { Header } from '../commonStyle.styled';

import {AddIcon } from '@chakra-ui/icons';

import { Button } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);

  const addContacts = newContactData => {
    const newContact = {
      ...newContactData,
    };
    if (!checkNewContactPresence(newContact.name)) {
      dispatch(addContact(newContact));
    } else {
      alert(`${newContact.name} is already in contacts!`);
    }
  };

  const checkNewContactPresence = contactName => {
    return contacts.some(contact => contact.name === contactName);
  };

  const formSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    addContacts({
      name: evt.target.name.value,
      number: evt.target.number.value,
    });
    form.reset();
  };

  return (
    <>
      <Header>Phonebook</Header>

      <form onSubmit={formSubmit}>
        <FormControl marginBottom="10px">
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            required
            width="300px"
            placeholder="Enter contact Name"
            variant="outline"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Number</FormLabel>
          <Input
            name="number"
            type="tel"
            required
            width="300px"
            placeholder="Enter contact Number"
            variant="outline"
          />
        </FormControl>

        <Button width="150px" type="submit" marginTop="20px" colorScheme="blue">
          Add contact <AddIcon marginLeft="5px"/>
        </Button>
      </form>
    </>
  );
};

export default ContactForm;