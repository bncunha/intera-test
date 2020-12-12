import React from 'react';
import { Label } from '../../../components/Forms';
import UserSection from '../UserSection';
import { AboutGroup } from './styles';

const About: React.FC = () => {
  
  return (   
    <UserSection title="Sobre" onEdit={() => {}}>
      <p> Estou sempre disposto a aprender novas tecnologias, aprecio o compartilhamento de conhecimento, experiências e o trabalho em equipe. Possuo experiência com Web Development, comunicação cliente-servidor, design de interfaces e web components. Utilizando linguagens e tecnologias como javascript (Node.js e Angular2+), Java, banco de dados MySQL e SQL Server.  </p>
      <AboutGroup>
        <Label> E-mail </Label>
        <p> bruno.silva.cunha@hotmail.com </p>
      </AboutGroup>
      <AboutGroup>
        <Label> Sites </Label>
        <p> 
          github.com/bncunha  (Portfólio) <br/>
          instagram.com/bn.cunha/  (Site pessoal) 
        </p>
      </AboutGroup>
    </UserSection>
  );
};

export default About;