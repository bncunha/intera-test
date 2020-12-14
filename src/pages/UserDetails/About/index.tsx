import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useEffect, useRef, useState } from 'react';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { Fieldset, Label } from '../../../components/Forms';
import { Button, ButtonsGroup } from '../../../components/Forms/Button';
import Input from '../../../components/Forms/Input';
import { Row } from '../../../components/Layout';
import UserSection from '../UserSection';
import { AboutSchema } from './schema';
import { AboutGroup, MinusButton, PlusButton } from './styles';
import * as yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErros';
import { UsuarioService } from '../../../services/UsuarioService';
import { Usuario } from '../../../services/database';

interface AboutProps {
  user: Usuario;
}

const About: React.FC<AboutProps> = ({
  user
}) => {
  const formRef = useRef<FormHandles>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [qtdSites, setQtdSites] = useState<number>(0);
  const [arraySitesInput, setArraySitesInput] = useState<any[]>([]);
  const [sobre, setSobre] = useState<string>(user?.sobre);

  const handleSubmit = async (data: any) => {
    try {
      const schema: any = await AboutSchema.validate(data, {abortEarly: false});
      UsuarioService.saveUsuario(user.nome, schema);
      setEditMode(false);
      setSobre(UsuarioService.findByName(user.nome).value?.sobre || '')
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err));
      }      
    };
  };

  useEffect(() => {
    setSobre(user.sobre);
    if (user.sites) {
      setQtdSites(user.sites.length)
    }
  }, [user])

  useEffect(() => {
    formRef.current?.setData(UsuarioService.findByName(user.nome).value || {});
  }, [user, arraySitesInput, editMode])
  
  useEffect(() => {
    setArraySitesInput([...Array(qtdSites)]);
  }, [qtdSites])
  
  return (
    <UserSection title="Sobre" onEdit={() => setEditMode(true)}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Fieldset disabled={!editMode}>
          <Label htmlFor="sobre"> Sobre mim </Label>
          {
            editMode
            ? <Input name="sobre"/>
            : <p> { sobre } </p>
          }
          <AboutGroup>
            <Label htmlFor="email"> E-mail </Label>
            <Input id="email" name="email"/>
          </AboutGroup>
          <AboutGroup>
            <Label style={{display: 'inline-block'}}> Sites </Label>
            { editMode && <PlusButton onClick={() => setQtdSites(qtdSites + 1)} type="button" title="Adicionar site"> <FaPlusSquare/> </PlusButton> }
            {
              arraySitesInput.map((value: any, index: number) => (
                <Row noWrap key={index}>
                  <Input name={`sites[${index}]`} aria-label={`Site ${index+1}`}/>
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