import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toastError } from '../../components/Toast';
import { LinkedinService } from '../../services/LinkedinService';

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
          const user = await LinkedinService.getUserData();
          debugger;
        } catch(err) {
          console.log(err);
          debugger;
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