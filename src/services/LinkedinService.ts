import Cookies from 'js-cookie';
import { toastError } from '../components/Toast';

const CLIENT_ID = '7728gm8l07ypea';
const CLIENT_SECRET = 'dHc4WyOyDFYpMMOA';
const BASE_URL = 'https://www.linkedin.com/'
const REDIRECT_URL = 'http://localhost:3000'

export const LinkedinService = {

  getResponse: () => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('error')) {
      toastError('Erro ao se autenticar com o Linkedin!');
    } else if (queryParams.get('code')) {
      LinkedinService.saveCode(queryParams.get('code')?.toString() || '');
    }
  },

  getAuthorizationCode: () => {
    window.location.href = `${BASE_URL}oauth/v2/authorization?${new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URL,
      scope: 'r_liteprofile'
    }).toString()}`;      
  },

  saveCode: (code: string) => {
    Cookies.set('token', code, {expires: 60});
  }
};