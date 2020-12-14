import Axios from 'axios';
import Cookies from 'js-cookie';

const CLIENT_ID = '7728gm8l07ypea';
const CLIENT_SECRET = 'dHc4WyOyDFYpMMOA';
const BASE_URL = 'https://www.linkedin.com/'
const REDIRECT_URL = 'http://localhost:3000/linkedin'

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
    // window.location.href = `${BASE_URL}oauth/v2/accessToken?${new URLSearchParams({
    //   grant_type: 'authorization_code',
    //   code: authCode,
    //   redirect_uri: 'http://localhost:3000/linkedin',
    //   client_id: CLIENT_ID,
    //   client_secret: CLIENT_SECRET,
    // }).toString()}`;
    // try {
    //   const data = new FormData();
    //   data.set('grant_type', 'authorization_code')
    //   data.set('code', authCode);
    //   data.set('redirect_uri', REDIRECT_URL);
    //   data.set('client_id', CLIENT_ID);
    //   data.set('client_secret', CLIENT_SECRET);
    //   const response = await Axios.get(`${BASE_URL}oauth/v2/accessToken`, {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Access-Control-Allow-Origin': '*'
    //     }
    //   });
    //   console.log(response);
    // } catch(err) {
    //   console.log(err)
    // }
  },

  saveToken: (token: string) => {
    Cookies.set('token', token, {expires: 60});
  }
};