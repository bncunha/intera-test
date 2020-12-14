import React from 'react';
import { Title2 } from '../../../components/Texts';
import { Usuario } from '../../../services/database';
import { UserCardStyle } from '../styles';
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
    <UserCardStyle>
      <UserCardImage src={getUserImage(user)} alt="Imagem de perfil"/>
      <Title2> { user.nome } </Title2>
      <span> { user.ocupacao } </span>
    </UserCardStyle>
  )
};

export default UserCard;