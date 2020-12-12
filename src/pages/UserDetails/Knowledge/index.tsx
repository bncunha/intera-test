import React from 'react';
import { Label } from '../../../components/Forms';
import Progress from '../../../components/Progress';
import UserSection from '../UserSection';
import { KnowledgeGroup } from './styles';

const Knowledge: React.FC = () => {
  return (
    <UserSection title="Conhecimentos">
      <KnowledgeGroup>
        <Label> Javascript </Label>
        <Progress percent={10}/>
      </KnowledgeGroup>
      <KnowledgeGroup>
        <Label> Javascript </Label>
      </KnowledgeGroup>
      <KnowledgeGroup>
        <Label> Javascript </Label>
      </KnowledgeGroup>
    </UserSection>
  )
};

export default Knowledge;