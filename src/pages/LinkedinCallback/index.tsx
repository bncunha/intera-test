import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toastError } from '../../components/Toast';
import { LinkedinService } from '../../services/LinkedinService';
import { UsuarioService } from '../../services/UsuarioService';

const LinkedinCallback: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const getLinkedinInfo = async () => {
      const queryParams = new URLSearchParams(location.search);
      if (queryParams.get('error')) {
        toastError('Erro ao se autenticar com o Linkedin!');
      } else if (queryParams.get('code')) {
        try {
          await LinkedinService.handleAccessToken(queryParams.get('code') || '');
          const { data } = await LinkedinService.getUserData();
          UsuarioService.saveUsuario(data.firstName.localized.pt_BR + ' ' + data.lastName.localized.pt_BR, {imagem: data.profilePicture} as any)
          history.replace('/');
        } catch(err) {
          console.log(err);
          history.replace('/');
        }
      }
    }
    getLinkedinInfo();
  }, [location, history])
 
  return (
    <p style={{textAlign: 'center', marginTop: 50}}>
      Aguarde...Carregando dados do linkedin...
    </p>
  );
};

export default LinkedinCallback;