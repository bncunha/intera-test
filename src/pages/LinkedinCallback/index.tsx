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
        await LinkedinService.handleAccessToken(queryParams.get('code') || '');
        try {
          const { data } = await LinkedinService.getUserData();
          UsuarioService.saveUsuario(data.firstName.localized.pt_BR + ' ' + data.lastName.localized.pt_BR, {imagem: data.profilePicture} as any)
          console.log(data);
        } catch(err) {
          console.log(err);
        }
      }
    }
    getLinkedinInfo();
    history.replace('/');
  }, [location, history])
 
  return (
    <></>
  );
};

export default LinkedinCallback;