import React from 'react';
import { Card, Main, Row } from '../../components/Layout';
import { BackgroundCover, UserImage, UserName, UserRole } from './styles';

const UserDetails: React.FC = () => {
  return (
    <>
      <BackgroundCover/>
      <UserImage src="https://avatars2.githubusercontent.com/u/21287627?s=460&u=8cf8d6181b4dff0bc653def5089b9255d4067b9f&v=4" />
      <UserName> Bruno Cunha </UserName>
      <UserRole> Front-end Developer </UserRole>

      <Main>
        <Row>
          <Card>
            fwefji
          </Card>
        </Row>
      </Main>
    </>
  )
};

export default UserDetails;