import styled from 'styled-components';
import colors from '../../styles/colors';

interface TitleProps {
  color?: string;
}

export const Title1 = styled.h1<TitleProps>`
  font-weight: 700;
  font-size: 36px;
  color: ${props => props.color || colors.title}
`;