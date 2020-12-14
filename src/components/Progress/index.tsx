import React from 'react';
import { ProgressContainer, ProgressStatus } from './styles';

interface ProgressProps {
  percent: number;
};

const Progress: React.FC<ProgressProps> = ({
  percent
}) => {
  return (
    <ProgressContainer aria-label={`${percent} porcento completo`}>
      <ProgressStatus percentage={percent}/>
    </ProgressContainer>
  );
};

export default Progress;