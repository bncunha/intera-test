import React from 'react';
import { Main, Row } from '../../components/Layout';
import About from './About';
import Experience from './Experience';
import Knowledge from './Knowledge';
import { BackgroundCover, InfoContainer, UserImage, UserName, UserRole } from './styles';

const UserDetails: React.FC = () => {
  return (
    <>
      <BackgroundCover/>
      <UserImage src="https://avatars2.githubusercontent.com/u/21287627?s=460&u=8cf8d6181b4dff0bc653def5089b9255d4067b9f&v=4" alt="Imagem de perfil"/>
      <UserName> Bruno Cunha </UserName>
      <UserRole> Front-end Developer </UserRole>

      <Main>
        <Row style={{justifyContent: 'space-between'}}>
          <About/>
          <InfoContainer>
            <Knowledge/>          
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