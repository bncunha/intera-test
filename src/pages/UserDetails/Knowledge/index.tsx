import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import React, { useState } from 'react';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { Label } from '../../../components/Forms';
import { Button, ButtonsGroup } from '../../../components/Forms/Button';
import Input from '../../../components/Forms/Input';
import { Row } from '../../../components/Layout';
import Popup from '../../../components/Popup';
import Progress from '../../../components/Progress';
import { Title2 } from '../../../components/Texts';
import { MinusButton, PlusButton } from '../About/styles';
import UserSection from '../UserSection';
import { KnowledgeGroup } from './styles';

const Knowledge: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [qtdItems, setQtdItems] = useState<number>(1);

  const renderFormPopup = () => (
    <Popup isOpen={isOpen} onRequestClose={setIsOpen}>
      <Row noWrap style={{alignItems: 'center'}}>
        <Title2 style={{fontSize: 18}}> Conhecimentos </Title2>
        <PlusButton type="button" onClick={() => setQtdItems(qtdItems + 1)}> <FaPlusSquare/> </PlusButton>
      </Row>
      <Form onSubmit={(d) => console.log(d)}>
        {
          [...Array(qtdItems)].map((value: any, index: number) => (
            <Scope path={`conhecimentos[${index}]`} key={index}>
              <Row noWrap style={{alignItems: 'center', marginBottom: 10}}>
                <div>
                  <Label> Nome </Label>
                  <Input name="nome"/>
                </div>
                <div className="ml-3">
                  <Label> Porcentagem </Label>
                  <Input name="porcentagem"/>
                </div>
                <div className="ml-3">
                  { 
                    index === qtdItems - 1 &&
                    <MinusButton type="button" onClick={() => setQtdItems(qtdItems - 1)}> <FaMinusSquare/> </MinusButton>
                  }
                </div>
              </Row>
            </Scope>
          ))
        }
        <ButtonsGroup>
          <Button type="submit"> Salvar </Button>
          <Button type="button" marginLeft="5px" template="secondary" onClick={() => setIsOpen(false)}> Cancelar </Button>
        </ButtonsGroup>
      </Form>
    </Popup>
  );


  return (
    <>
      { renderFormPopup() }      
      <UserSection title="Conhecimentos" onEdit={() => setIsOpen(true)}>
        <KnowledgeGroup>
          <Label> Javascript </Label>
          <Progress percent={80}/>
        </KnowledgeGroup>
        <KnowledgeGroup>
          <Label> Javascript </Label>
          <Progress percent={70}/>
        </KnowledgeGroup>
        <KnowledgeGroup>
          <Label> Javascript </Label>
          <Progress percent={75}/>
        </KnowledgeGroup>
      </UserSection>
    </>
  )
};

export default Knowledge;