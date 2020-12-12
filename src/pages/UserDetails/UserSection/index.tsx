import React, { ReactNode } from 'react';
import { Card } from '../../../components/Layout';
import { UserSectionTitle } from './styles';

interface UserSectionProps {
  title: string;
  children: ReactNode;
};

const UserSection: React.FC<UserSectionProps> = ({
  title,
  children
}) => {
  return (
    <Card style={{marginBottom: 35}}>
      <UserSectionTitle> {title} </UserSectionTitle>
      { children }
    </Card>
  )
};

export default UserSection;