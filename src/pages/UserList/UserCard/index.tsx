import React from 'react';
import { Card } from '../../../components/Layout';
import { Title2 } from '../../../components/Texts';
import { Usuario } from '../../../services/api';
import { UserCardImage } from './styles';

interface UserCardProps {
  user: Usuario;
}

const UserCard: React.FC<UserCardProps> = ({
  user
}) => {
  return (
    <Card style={{textAlign: 'center'}}>
      <UserCardImage src="https://avatars2.githubusercontent.com/u/21287627?s=460&u=8cf8d6181b4dff0bc653def5089b9255d4067b9f&v=4" alt="Imagem de perfil"/>
      <Title2> { user.nome } </Title2>
      <span> { user.ocupacao } </span>
    </Card>
  )
};

export default UserCard;