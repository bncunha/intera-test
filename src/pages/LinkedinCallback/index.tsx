import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toastError } from '../../components/Toast';
import { LinkedinService } from '../../services/LinkedinService';

const LinkedinCallback: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    debugger;
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('error')) {
      toastError('Erro ao se autenticar com o Linkedin!');
    } else if (queryParams.get('code')) {
      console.log(queryParams.get('code'));
      LinkedinService.handleAccessToken(queryParams.get('code') || '')
    }
    history.replace('/');
  }, [location])
 
  return (
    <></>
  );
};

export default LinkedinCallback;