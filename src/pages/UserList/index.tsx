import React, { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import {  Main, Row } from '../../components/Layout';
import { Title2 } from '../../components/Texts';
import { Usuario } from '../../services/api';
import { UsuarioService } from '../../services/UsuarioService';
import { AddUserCard, PlusIconContainer, UserCardContainer, UserSearch } from './styles';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [usersFiltered, setUsersFiltered] = useState<Usuario[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
    <>
      <Popup isOpen={modalOpen} onRequestClose={setModalOpen}>
        cifwejfi
      </Popup>
      <Main style={{paddingTop: 10}}>
        <UserSearch placeholder="Buscar por talentos..." onChange={(ev) => filterByName(ev.target.value)}/>
        <Row style={{justifyContent: 'center'}}>
          <UserCardContainer tabIndex={0} onClick={() => setModalOpen(true)}>
            <AddUserCard>
              <PlusIconContainer> <FaPlus/> </PlusIconContainer>
              <Title2 style={{textAlign: 'center'}}> Adicionar novo Usuário </Title2>
            </AddUserCard>
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