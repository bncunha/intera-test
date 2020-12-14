import React, { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import {  Main, Row } from '../../components/Layout';
import { Title2 } from '../../components/Texts';
import { Usuario } from '../../services/database';
import { UsuarioService } from '../../services/UsuarioService';
import { PlusIconContainer, UserCardContainer, UserCardStyle, UserSearch } from './styles';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import { LinkedinService } from '../../services/LinkedinService';

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

  const handleAddNewUser = () => {
    LinkedinService.handleAuthorizationCode();
  };

  useEffect(() => {
    const allUsers = UsuarioService.getAll();
    setUsers(allUsers);
    setUsersFiltered(allUsers);
  }, []);

  return (
    <>
      <Main style={{paddingTop: 10}}>
        <UserSearch aria-label="Buscar talentos " placeholder="Buscar por talentos..." onChange={(ev) => filterByName(ev.target.value)}/>
        <Row style={{justifyContent: 'center'}}>
          <UserCardContainer tabIndex={0} onClick={handleAddNewUser}>
            <UserCardStyle>
              <PlusIconContainer> <FaPlus/> </PlusIconContainer>
              <Title2 style={{textAlign: 'center'}}> 
                Adicionar meus dados 
              </Title2>
              <img src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png" alt="Linkedin button" width="200" style={{display: 'block', margin: 'auto'}}/>
            </UserCardStyle>
          </UserCardContainer>
      
          {
            usersFiltered.map((user) => (
              <UserCardContainer key={user.nome}>
                <Link to={`/user/${user.nome}`} style={{textDecoration: 'none'}}>
                  <UserCard user={user}/>
                </Link>
              </UserCardContainer>
            ))
          }
        </Row>
      </Main>
    </>
  )
};

export default UserList;