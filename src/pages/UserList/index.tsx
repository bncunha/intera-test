import React, { useEffect, useState } from 'react';
import {  Main, Row } from '../../components/Layout';
import { Title1, Title2 } from '../../components/Texts';
import { Usuario } from '../../services/api';
import { UsuarioService } from '../../services/UsuarioService';
import { UserCardContainer } from './styles';
import UserCard from './UserCard';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<Usuario[]>([]);

  useEffect(() => {
    setUsers(UsuarioService.getAll())
  }, []);

  return (
    <Main style={{paddingTop: 10}}>
      <Row style={{justifyContent: 'center'}}>
        {
          users.map((user) => (
            <UserCardContainer>
              <UserCard key={user.nome} user={user}/>
            </UserCardContainer>
          ))
        }
      </Row>
    </Main>
  )
};

export default UserList;