import styled from 'styled-components';
import colors from '../../styles/colors';

export const InputStyle = styled.input`
  color: ${colors.text};
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 0;
  padding-left: 0;
  border-bottom: 1px solid ${colors.primary};
  margin-bottom: 5px;
  
  &:disabled {
    border: none;
    background-color: transparent;
  }
`;

export const Label = styled.label`
  font-weight 600;
  color: ${colors.title};
  display: block;
  margin-bottom: 5px;
`;

export const FormError = styled.small`
  color: red;
  display: block;
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;