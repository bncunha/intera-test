import React from 'react';
import Timeline from '../../../components/Timeline';
import UserSection from '../UserSection';

const Experience: React.FC = () => {
  return (
    <UserSection title="Experiências" onEdit={() => {}}>
      <Timeline/>
    </UserSection>
  )
};

export default Experience;