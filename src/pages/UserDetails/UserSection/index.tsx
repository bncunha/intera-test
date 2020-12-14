import React, { ReactNode } from 'react';
import { Card } from '../../../components/Layout';
import { EditButton, UserSectionTitle } from './styles';
import { FaEdit } from 'react-icons/fa';

interface UserSectionProps {
  title: string;
  children: ReactNode;
  onEdit():void;
};

const UserSection: React.FC<UserSectionProps> = ({
  title,
  onEdit,
  children
}) => {
  return (
    <Card style={{marginBottom: 35}}>
      <EditButton onClick={onEdit}> <FaEdit /> </EditButton>
      <UserSectionTitle> {title} </UserSectionTitle>
      { children }
    </Card>
  )
};

export default UserSection;