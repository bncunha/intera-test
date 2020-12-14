const express = require('express');
const path = require('path');
const app = express();
const Axios = require('axios')
const cookieParser = require('cookie-parser')

app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser());
app.use(express.json());

app.post('/linkedin/accessToken', async (req, res) => {
  const CLIENT_ID = '7728gm8l07ypea';
  const CLIENT_SECRET = 'dHc4WyOyDFYpMMOA';
  const REDIRECT_URL = 'http://localhost:9000/linkedin'

  try {
    console.log('Get linkedin token:', req.body.code);
    const response = await Axios.post(`https://www.linkedin.com/oauth/v2/accessToken?${new URLSearchParams({
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: REDIRECT_URL,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }).toString()}`);
    console.log(response.data);
    res.json(response.data);
  } catch(err) {
    console.log(err);
    res.status(500).send('Erro ao recuprerar o token');
  }
})

app.get('/linkedin/user', async (req, res) => {
  try {
    const response = await Axios.get('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))', {
      headers: {
        'Authorization': 'Bearer ' + req.cookies.token
      }
    })
    console.log(response.data);
    res.json(response.data);
  } catch(err) {
    console.log(err);
    res.status(500).send('Erro ao recuprerar o usuário');
  }
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, () => {
  console.log('Listen');
});