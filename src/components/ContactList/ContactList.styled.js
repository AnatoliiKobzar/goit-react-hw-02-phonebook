import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
