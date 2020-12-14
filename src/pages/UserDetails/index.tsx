import React, { useEffect, useState } from 'react';
import { Main, Row } from '../../components/Layout';
import About from './About';
import Experience from './Experience';
import Knowledge from './Knowledge';
import { BackgroundCover, InfoContainer, UserImage, UserName, UserRole } from './styles';
import { useParams, useHistory } from "react-router-dom";
import { UsuarioService } from '../../services/UsuarioService';
import { Usuario } from '../../services/database';

interface UserDetailsParams {
  name: string;
}

const UserDetails: React.FC = () => {
  const history = useHistory();
  const { name } = useParams<UserDetailsParams>();
  const [user, setUser] = useState<Usuario>({} as Usuario);

  const getUserImage = (user: Usuario) => {
    return user.imagem?.['displayImage~']?.elements?.[0]?.identifiers?.[0].identifier;
  };

  useEffect(() => {
    try {
      const finded = UsuarioService.findByName(name);
      if (!finded.value) {
        throw new Error('Usuário não encontrado');
      }
      setUser(finded.value);
    } catch(err) {
      history.replace('/');
    }
  }, [history, name])

  return (
    <>
      <BackgroundCover/>
      <UserImage src={getUserImage(user)} alt="Imagem de perfil"/>
      <UserName> { user.nome } </UserName>
      <UserRole> { user.ocupacao } </UserRole>

      <Main>
        <Row style={{justifyContent: 'space-between'}}>
          <div style={{width: '100%'}}>
            <About user={user}/>
          </div>
          <InfoContainer>
            <Knowledge user={user}/>          
          </InfoContainer>
          <InfoContainer>
            <Experience user={user}/>
          </InfoContainer>
        </Row>
      </Main>
    </>
  )
};

export default UserDetails;