import React from 'react';
import { Experiencia } from '../../services/api';
import { TimelineDescription, TimelineInfo, TimelineNode, TimelineTitle, TimelineWrapper } from './styles';

interface TimelineProps {
  timeline: Experiencia[];
};

const Timeline: React.FC<TimelineProps> = ({
  timeline
}) => {
  return (
    <TimelineWrapper>
      { timeline?.map(exp => (
        <TimelineNode key={exp.ocupacao + exp.empresa + exp.dataInicio}>
          <TimelineTitle> { exp.ocupacao } </TimelineTitle>
          <TimelineInfo> { exp.empresa } </TimelineInfo>
          <TimelineInfo> { exp.dataInicio.toString() } - { exp.dataFim ? exp.dataFim.toString() : 'presente' } </TimelineInfo>
          <TimelineDescription> { exp.detalhes } </TimelineDescription>
        </TimelineNode>
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;