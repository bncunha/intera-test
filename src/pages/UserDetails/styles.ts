import styled from 'styled-components';
import BackgroundProfile from '../../assets/profile_background.png';
import { Title1 } from '../../components/Texts';
import breakpoints from '../../styles/breakpoints';

export const BackgroundCover = styled.div`
  width: 100%;
  height: 145px;
  background: url(${BackgroundProfile}) no-repeat center;
  background-color: #272727;
`;

export const UserImage = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 50%;
  margin: auto;
  margin-top: -50px;
  display: block;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const UserName = styled(Title1)`
  margin: auto;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 5px;
`

export const UserRole = styled.p`
  text-align: center;
  margin-bottom: 35px;
`;

export const InfoContainer = styled.div`
  flex-basis: 100%;

  @media(min-width: ${breakpoints.lg}px) {
    flex-basis: 48%
  }
`