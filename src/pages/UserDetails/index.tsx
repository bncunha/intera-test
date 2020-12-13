import React, { useEffect, useState } from 'react';
import { Main, Row } from '../../components/Layout';
import About from './About';
import Experience from './Experience';
import Knowledge from './Knowledge';
import { BackgroundCover, InfoContainer, UserImage, UserName, UserRole } from './styles';
import { useParams, useHistory } from "react-router-dom";
import { UsuarioService } from '../../services/UsuarioService';
import { Usuario } from '../../services/api';

interface UserDetailsParams {
  name: string;
}

const UserDetails: React.FC = () => {
  const history = useHistory();
  const { name } = useParams<UserDetailsParams>();
  const [user, setUser] = useState<Usuario>({} as Usuario);

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
      <UserImage src="https://avatars2.githubusercontent.com/u/21287627?s=460&u=8cf8d6181b4dff0bc653def5089b9255d4067b9f&v=4" alt="Imagem de perfil"/>
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
            <Experience/>
          </InfoContainer>
        </Row>
      </Main>
    </>
  )
};

export default UserDetails;