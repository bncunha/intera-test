import { FormHandles, Scope } from '@unform/core';
import { Form } from '@unform/web';
import React, { useEffect, useRef, useState } from 'react';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { Label } from '../../../components/Forms';
import { Button, ButtonsGroup } from '../../../components/Forms/Button';
import Input from '../../../components/Forms/Input';
import { Row } from '../../../components/Layout';
import Popup from '../../../components/Popup';
import { Title2 } from '../../../components/Texts';
import Timeline from '../../../components/Timeline';
import { Experiencia, Usuario } from '../../../services/database';
import { MinusButton, PlusButton } from '../About/styles';
import UserSection from '../UserSection';
import * as yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErros';
import DatePicker from '../../../components/Forms/Datepicker';
import { ExperienceSchema } from './schema';
import { UsuarioService } from '../../../services/UsuarioService';

interface ExperienceProps {
  user: Usuario;
};

const Experience: React.FC<ExperienceProps> = ({
  user
}) => {
  const formRef = useRef<FormHandles>(null);
  const [userState, setUserState] = useState<any>(user);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [qtdItems, setQtdItems] = useState<number>(1);
  const [arrayItems, setArrayItems] = useState<any[]>([]);
  const [experiencias, setExperiencias] = useState<Experiencia[]>(user.experiencias);

  const handleSubmit = async (data: {experiencias?: Experiencia[]}) => {
    try {
      if (Object.keys(data).length === 0) {
        data.experiencias = [];
      }
      formRef.current?.setErrors({});
      const schema: any = await ExperienceSchema.validate(data, {abortEarly: false});
      schema.experiencias?.sort((a: Experiencia, b: Experiencia) => b.dataInicio.getTime() - a.dataInicio.getTime())
      UsuarioService.saveUsuario(user.nome, schema);
      const userSaved = UsuarioService.findByName(userState.nome).value;
      setIsOpen(false);
      setExperiencias(userSaved?.experiencias || []);
      setUserState(userSaved);
    } catch (err) {
      console.log(err);
      if (err instanceof yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err))
      }
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    formRef.current?.setErrors({});
  }

  useEffect(() => {
    if (userState.experiencias) {
      setQtdItems(userState.experiencias.length)
    }
  }, [userState.experiencias, user.experiencias])

  useEffect(() => {
    setArrayItems([...Array(qtdItems)]);
  }, [qtdItems]);

  useEffect(() => {
    setUserState(user);
    setExperiencias(user.experiencias);
  }, [user])
  
  const renderFormPopup = () => (
    <Popup isOpen={isOpen} onRequestClose={handleCancel} size="large">
      <Row noWrap style={{alignItems: 'center'}}>
        <Title2 style={{fontSize: 18}}> Experiências </Title2>
        <PlusButton type="button" onClick={() => setQtdItems(qtdItems + 1)}> <FaPlusSquare/> </PlusButton>
      </Row>
      <Form ref={formRef} onSubmit={handleSubmit} 
      initialData={{
        experiencias: userState?.experiencias?.map((exp: Experiencia) => {
          exp.dataInicio = new Date(exp.dataInicio);
          exp.dataFim = exp.dataFim ? new Date(exp.dataFim) : undefined;
          return exp;
        })
      }}>
        {
          arrayItems.map((value: any, index: number) => (
            <Scope path={`experiencias[${index}]`} key={index}>
              <Row style={{marginBottom: 20, justifyContent: 'space-between', padding: 10, border: '1px solid #cdcdcd'}}>
                {  
                  index === qtdItems - 1 &&
                  <div style={{width: '100%'}}>
                    <MinusButton type="button" onClick={() => setQtdItems(qtdItems - 1)}> <FaMinusSquare/> </MinusButton>
                  </div>
                }
                <div>
                  <Label> Ocupação </Label>
                  <Input name="ocupacao"/>
                </div>
                <div>
                  <Label> Empresa </Label>
                  <Input name="empresa"/>
                </div>
                <div>
                  <Label> Data de início </Label>
                  <DatePicker name="dataInicio"/>
                </div>
                <div>
                  <Label> Data fim </Label>
                  <DatePicker name="dataFim"/>
                </div>
                <div>
                  <Label> Detalhes </Label>
                  <Input name="detalhes"/>
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
      <UserSection title="Experiências" onEdit={() => setIsOpen(true)}>
        <Timeline timeline={experiencias}/>
      </UserSection>
    </>
  )
};

export default Experience;