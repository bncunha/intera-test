import { Form } from '@unform/web';
import React, { useState } from 'react';
import { Fieldset, Label } from '../../../components/Forms';
import Input from '../../../components/Forms/Input';
import UserSection from '../UserSection';
import { AboutGroup } from './styles';

const About: React.FC = () => {

  const [editMode, setEditMode] = useState<boolean>(false);
  
  return (
    <Form onSubmit={() => {}}>
      <UserSection title="Sobre" onEdit={() => setEditMode(!editMode)}>
        <Fieldset disabled={!editMode}>
          <p> Estou sempre disposto a aprender novas tecnologias, aprecio o compartilhamento de conhecimento, experiências e o trabalho em equipe. Possuo experiência com Web Development, comunicação cliente-servidor, design de interfaces e web components. Utilizando linguagens e tecnologias como javascript (Node.js e Angular2+), Java, banco de dados MySQL e SQL Server.  </p>
          <AboutGroup>
            <Label> E-mail </Label>
            <Input name="email"/>
          </AboutGroup>
          <AboutGroup>
            <Label> Sites </Label>
            <p> 
              github.com/bncunha  (Portfólio) <br/>
              instagram.com/bn.cunha/  (Site pessoal) 
            </p>
          </AboutGroup>
        </Fieldset>
      </UserSection>        
    </Form>
  );
};

export default About;