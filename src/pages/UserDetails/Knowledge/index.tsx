import { FormHandles, Scope } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
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
import * as yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErros';
import { KnowledgeSchema } from './schema';
import { UsuarioService } from '../../../services/UsuarioService';
import { Conhecimento } from '../../../services/api';

const Knowledge: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [qtdItems, setQtdItems] = useState<number>(1);

  const handleSubmit = async (data: {conhecimentos?: Conhecimento[]}) => {
    try {
      if (Object.keys(data).length === 0) {
        data.conhecimentos = [];
      }
      formRef.current?.setErrors({});
      const schema: any = await KnowledgeSchema.validate(data, {abortEarly: false});
      UsuarioService.saveUsuario('Bruno Cunha', schema);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err))
      }
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    formRef.current?.setErrors({});
  }

  const renderFormPopup = () => (
    <Popup isOpen={isOpen} onRequestClose={handleCancel}>
      <Row noWrap style={{alignItems: 'center'}}>
        <Title2 style={{fontSize: 18}}> Conhecimentos </Title2>
        <PlusButton type="button" onClick={() => setQtdItems(qtdItems + 1)}> <FaPlusSquare/> </PlusButton>
      </Row>
      <Form ref={formRef} onSubmit={handleSubmit}>
        {
          [...Array(qtdItems)].map((value: any, index: number) => (
            <Scope path={`conhecimentos[${index}]`} key={index}>
              <Row noWrap style={{marginBottom: 10}}>
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
          <Button type="button" marginLeft="5px" template="secondary" onClick={handleCancel}> Cancelar </Button>
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