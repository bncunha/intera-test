import axios from 'axios';

const CLIENT_ID = '7728gm8l07ypea';
const CLIENT_SECRET = 'dHc4WyOyDFYpMMOA';
const BASE_URL = 'https://www.linkedin.com/'
const REDIRECT_URL = 'http://localhost:3000'

export const LinkedinService = {
  getAuthorizationCode: async () => {
    try {
      const response = axios.get(BASE_URL + 'oauth/v2/authorization', {
        params: {
          response_type: 'code',
          client_id: CLIENT_ID,
          redirect_uri: REDIRECT_URL,
          scope: 'r_liteprofile%20r_emailaddress%20w_member_social'
        }
      });
      console.log(response);
      
    } catch (err) {
      console.log(err);
    }
  }
};