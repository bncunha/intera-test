import styled from 'styled-components';
import { Title2 } from '../../../components/Texts';
import colors from '../../../styles/colors';

export const UserSectionTitle = styled(Title2)`
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.title};
`;

export const EditButton = styled.button`
  color: ${colors.title};
  font-size: 21px;
  position: absolute;
  right: 25px;
  top: 55px;
`;
