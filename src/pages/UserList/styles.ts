import styled from 'styled-components';
import { Card } from '../../components/Layout';
import colors from '../../styles/colors';

export const UserCardContainer = styled.div`
  flex-basis: 300px;
  margin: 15px;
  cursor: pointer;
  height: 280px;
`;

export const UserSearch = styled.input`
  border: none;
  color: ${colors.title};
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

export const AddUserCard = styled(Card) `
  height: 280px;
`;

export const PlusIconContainer = styled.div`
  font-size: 53px;
  margin: auto;
  width: fit-content;
  margin-top: 40px;
`;