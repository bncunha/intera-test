import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { Fieldset, Label } from '../../../components/Forms';
import { Button, ButtonsGroup } from '../../../components/Forms/Button';
import Input from '../../../components/Forms/Input';
import { Row } from '../../../components/Layout';
import UserSection from '../UserSection';
import { AboutGroup, MinusButton, PlusButton } from './styles';

const About: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [qtdSites, setQtdSites] = useState<number>(0);

  const handleSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (err) {

    };
  };
  
  return (
    <UserSection title="Sobre" onEdit={() => setEditMode(true)}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={{sites: []}}>
        <Fieldset disabled={!editMode}>
          <p> Estou sempre disposto a aprender novas tecnologias, aprecio o compartilhamento de conhecimento, experiências e o trabalho em equipe. Possuo experiência com Web Development, comunicação cliente-servidor, design de interfaces e web components. Utilizando linguagens e tecnologias como javascript (Node.js e Angular2+), Java, banco de dados MySQL e SQL Server.  </p>
          <AboutGroup>
            <Label htmlFor="email"> E-mail </Label>
            <Input id="email" name="email"/>
          </AboutGroup>
          <AboutGroup>
            <Label style={{display: 'inline-block'}}> Sites </Label>
            { editMode && <PlusButton onClick={() => setQtdSites(qtdSites + 1)} type="button" title="Adicionar site"> <FaPlusSquare/> </PlusButton> }
            {
              [...Array(qtdSites)].map((value: any, index: number) => (
                <Row noWrap key={index}>
                  <Input name={`sites[${index}]`}/>
                  {
                    editMode && qtdSites === index + 1 &&
                    <MinusButton type="button" title="Remover site" onClick={() => setQtdSites(qtdSites - 1)}> 
                      <FaMinusSquare/> 
                    </MinusButton>
                  }   
                </Row>
              ))
            }
          </AboutGroup>
        </Fieldset>
        {editMode && 
          <ButtonsGroup>
            <Button> Salvar </Button>
            <Button template="secondary" type="button" marginLeft="10px" onClick={() => setEditMode(false)}> Cancelar </Button>
          </ButtonsGroup>
        }
      </Form>
    </UserSection>        
  );
};

export default About;