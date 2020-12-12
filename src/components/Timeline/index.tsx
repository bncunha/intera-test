import React from 'react';
import { TimelineDescription, TimelineInfo, TimelineNode, TimelineTitle, TimelineWrapper } from './styles';

const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <TimelineNode>
        <TimelineTitle> Front-end </TimelineTitle>
        <TimelineInfo> Wize Company </TimelineInfo>
        <TimelineInfo> fev. 2018 - jan. 2019 </TimelineInfo>
        <TimelineDescription> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </TimelineDescription>
      </TimelineNode>
      <TimelineNode>
        <TimelineTitle> Front-end </TimelineTitle>
        <TimelineInfo> Wize Company </TimelineInfo>
        <TimelineInfo> fev. 2018 - jan. 2019 </TimelineInfo>
        <TimelineDescription> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </TimelineDescription>
      </TimelineNode>
      <TimelineNode>
        <TimelineTitle> Front-end </TimelineTitle>
        <TimelineInfo> Wize Company </TimelineInfo>
        <TimelineInfo> fev. 2018 - jan. 2019 </TimelineInfo>
        <TimelineDescription> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </TimelineDescription>
      </TimelineNode>
      <TimelineNode>
        <TimelineTitle> Front-end </TimelineTitle>
        <TimelineInfo> Wize Company </TimelineInfo>
        <TimelineInfo> fev. 2018 - jan. 2019 </TimelineInfo>
        <TimelineDescription> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </TimelineDescription>
      </TimelineNode>
    </TimelineWrapper>
  );
};

export default Timeline;