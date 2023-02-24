import { Button } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { Contact, Info, Wrap, ContactsList } from './ContactList.styled';
import PropTypes from 'prop-types';
import { SlUserUnfollow, SlCallEnd, SlSocialGithub } from 'react-icons/sl';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          <Wrap>
            <Info>
              <SlSocialGithub size="18px" />
              {contact.name}:
            </Info>
            <Info>
              <SlCallEnd size="18px" />
              {contact.number}
            </Info>
          </Wrap>
          <Button
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            <SlUserUnfollow size="18px" />
            Delete
          </Button>
        </Contact>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
