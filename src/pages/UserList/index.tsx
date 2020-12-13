import React, { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import {  Main, Row } from '../../components/Layout';
import { Title2 } from '../../components/Texts';
import { Usuario } from '../../services/api';
import { UsuarioService } from '../../services/UsuarioService';
import { AddUserCard, PlusIconContainer, UserCardContainer, UserSearch } from './styles';
import UserCard from './UserCard';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [usersFiltered, setUsersFiltered] = useState<Usuario[]>([]);

  const filterByName = useCallback((name: string) => {
    console.log(name)
    setUsersFiltered(
      name 
      ? users.filter(user => user.nome?.toUpperCase().indexOf(name.toUpperCase()) >= 0)
      : users);
  }, [users])

  useEffect(() => {
    const allUsers = UsuarioService.getAll();
    setUsers(allUsers);
    setUsersFiltered(allUsers);
  }, []);

  return (
    <Main style={{paddingTop: 10}}>
      <UserSearch placeholder="Buscar por talentos..." onChange={(ev) => filterByName(ev.target.value)}/>
      <Row style={{justifyContent: 'center'}}>
        <UserCardContainer>
          <AddUserCard>
            <PlusIconContainer> <FaPlus/> </PlusIconContainer>
            <Title2 style={{textAlign: 'center'}}> Adicionar novo Usuário </Title2>
          </AddUserCard>
        </UserCardContainer>
    
        {
          usersFiltered.map((user) => (
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