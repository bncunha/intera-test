import Axios from 'axios';
import Cookies from 'js-cookie';

const CLIENT_ID = '7728gm8l07ypea';
const BASE_URL = 'https://www.linkedin.com/'
const REDIRECT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/linkedin' : `https://${window.location.host}/linkedin`
const API = `https://intera-test.herokuapp.com/linkedin/`;

export const LinkedinService = {
  authToken: 'AQSIZR3twQNcmlrqD6_lRVuiPa90-PTEG-T5gQQ1C2t1lggIYv3GA7RWpiS_g-IvZs1NDgn4FKXctwHR-rlNpO5x4c-LaWquKZE8iHfmx1Cz3Q3FT0hoYs2HLPf9XXyLzPYJjlhbn2zspsvfd_xJZNhw3LTUkMwM-a3rTCWKLk7Y6DxsZ_VBG4PVYODJjQ',

  handleAuthorizationCode: () => {
    window.location.href = `${BASE_URL}oauth/v2/authorization?${new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URL,
      scope: 'r_liteprofile'
    }).toString()}`;      
  },

  handleAccessToken: async (authCode: string) => {    
    try {
      const response = await Axios.post(`${API}accessToken`, {code: authCode, redirect: REDIRECT_URL}, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      LinkedinService.saveToken(response.data.access_token);
      return response.data.access_token;
    } catch(err) {
      console.log(err);
      return null;
    }
  },

  getUserData: () => {
    return Axios.get(`${API}user`, {
      headers: {
        'Authorization': 'Bearer ' + Cookies.get('token')
      }
    })
  },

  saveToken: (token: string) => {
    Cookies.set('token', token, {expires: 60});
  }
};