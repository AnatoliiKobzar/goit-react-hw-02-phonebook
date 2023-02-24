import { FormField } from 'components/ContactForm/ContactForm.styled';
import React from 'react';

export const Filter = ({ onChange, value }) => {
  return (
    <FormField>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </FormField>
  );
};
