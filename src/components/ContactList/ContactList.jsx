import { Button } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { Contact, Info, Wrap, ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          <Wrap>
            <Info>{contact.name}:</Info>
            <Info>{contact.number}</Info>
          </Wrap>
          <Button
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </Button>
        </Contact>
      ))}
    </ContactsList>
  );
};
