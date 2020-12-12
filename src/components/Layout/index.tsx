import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

interface RowProps {
  noWrap?: boolean;
};

export const Main = styled.main`
  padding-left: 10px;  
  padding-right: 10px;  

  @media(min-width: ${breakpoints.lg}px) {
    max-width: 1200px;
    margin: auto;    
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
  padding: 28px;
  max-width: 100%;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${props => props.noWrap ? 'no-wrap' : 'wrap'};
`;