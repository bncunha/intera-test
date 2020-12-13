import styled from 'styled-components';
import colors from '../../styles/colors';

export const UserCardContainer = styled.div`
  flex-basis: 300px;
  margin: 15px;
`;

export const UserSearch = styled.input`
  border: none;
  color: ${colors.text};
  border-bottom: 1px solid ${colors.text};
  background: transparent;
  border-radius: 0;
  padding: 24px;
  max-width: 600px;
  width: 100%;
  margin: auto;
  display: block;
  margin-bottom: 30px;
  font-size: 23px;
  text-align: center;
`; 
