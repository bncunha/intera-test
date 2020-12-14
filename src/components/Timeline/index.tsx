import React from 'react';
import { Experiencia } from '../../services/database';
import { TimelineDescription, TimelineInfo, TimelineNode, TimelineTitle, TimelineWrapper } from './styles';
import moment from 'moment';

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
          <TimelineInfo> { moment(exp.dataInicio).format('DD/MM/yyyy') } - { exp.dataFim?.getDate() ? moment(exp.dataFim).format('DD/MM/yyyy') : 'presente' } </TimelineInfo>
          <TimelineDescription> { exp.detalhes } </TimelineDescription>
        </TimelineNode>
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;