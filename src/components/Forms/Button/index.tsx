import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

interface ButtonProps {
  template?: 'primary' | 'secondary';
  marginLeft?: string;
}

export const Button = styled.button<ButtonProps>`
  font-weight: 600;
  border-radius: 5px;
  padding: 12px 24px;
  margin-left: ${props => props.marginLeft || '0px'};

  ${props => (!props.template || props.template === 'primary') && css`
    color: #fff;
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
  `}
    
  ${props => props?.template === 'secondary' && css`
    border: 2px solid ${colors.primary};
    background-color: #fff;
  `}
`;

export const ButtonsGroup = styled.div`
  margin-top: 20px;
`;

export const EmptyButton = styled.button`
  color: ${colors.title};
  font-size: 21px;
  position: absolute;
  right: 25px;
  top: 55px;
  border: none;
  background: none;
`;