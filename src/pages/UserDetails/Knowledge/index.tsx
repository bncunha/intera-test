import React from 'react';
import { Label } from '../../../components/Forms';
import Popup from '../../../components/Popup';
import Progress from '../../../components/Progress';
import UserSection from '../UserSection';
import { KnowledgeGroup } from './styles';

const Knowledge: React.FC = () => {
  return (
    <>
      <Popup isOpen={true} onRequestClose={() => {}}>
          efwe
      </Popup>
      <UserSection title="Conhecimentos" onEdit={() => {}}>
        <KnowledgeGroup>
          <Label> Javascript </Label>
          <Progress percent={80}/>
        </KnowledgeGroup>
        <KnowledgeGroup>
          <Label> Javascript </Label>
          <Progress percent={70}/>
        </KnowledgeGroup>
        <KnowledgeGroup>
          <Label> Javascript </Label>
          <Progress percent={75}/>
        </KnowledgeGroup>
      </UserSection>
    </>
  )
};

export default Knowledge;