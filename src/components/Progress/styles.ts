import styled from 'styled-components';
import colors from '../../styles/colors';

interface ProgressStatusProps {
  percentage?: number;
};

export const ProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  background: #E8E8E8;
  border-radius: 20px;
`;

export const ProgressStatus = styled.div<ProgressStatusProps>`
  width: ${props => props.percentage || 0}%;
  background-color: ${colors.primary};
  height: 10px;
  border-radius: 20px;
`;
