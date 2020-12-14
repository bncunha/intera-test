import React from 'react';
import { Card } from '../../../components/Layout';
import { Title2 } from '../../../components/Texts';
import { Usuario } from '../../../services/database';
import { UserCardImage } from './styles';

interface UserCardProps {
  user: Usuario;
}

const UserCard: React.FC<UserCardProps> = ({
  user
}) => {

  const getUserImage = (user: Usuario) => {
    return user.imagem?.['displayImage~']?.elements?.[0]?.identifiers?.[0].identifier;
  };

  return (
    <Card style={{textAlign: 'center', height: 280}}>
      <UserCardImage src={getUserImage(user)} alt="Imagem de perfil"/>
      <Title2> { user.nome } </Title2>
      <span> { user.ocupacao } </span>
    </Card>
  )
};

export default UserCard;