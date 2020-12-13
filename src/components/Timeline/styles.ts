import styled from 'styled-components';
import colors from '../../styles/colors';

export const TimelineWrapper = styled.div`
  border-left: 3px solid ${colors.primary};
  line-height: 22px; 
`;

export const TimelineNode = styled.div`
  position: relative;
  padding-left: 20px;
  padding-bottom: 40px;

  &::before {
    content: "";
    width: 15px;
    height: 15px;
    background: ${colors.primary};
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -9px;
  }

  &:last-child::after {
    content: "";
    width: 6px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    height: 100%;
    border-radius: 0;
    background: #fff;
  }
`;

export const TimelineTitle = styled.span`
  font-weight: 600;
  color: ${colors.title};
  display: block;
  font-size: 18px;
`;

export const TimelineInfo = styled.p`
  font-weight: 400;
  color: ${colors.text};
  display: block;
  font-size: 14px;
  margin: 0;
`;

export const TimelineDescription = styled.p`
  margin: 0;
  max-width: 400px;
  font-size: 14px;
  align-text: justify;
  margin-top: 5px;
`;