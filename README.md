# Intera Test [![Build Status](https://circleci.com/gh/bncunha/intera-test.svg?style=shield)](https://app.circleci.com/pipelines/github/bncunha/intera-test) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bncunha/intera-test)

Este um sistema para que os Talentos possam compartilhar informações sobre a seus conhecimentos, experiências e dados pessoais com o Time Intera.

## Demo 
Você pode visualizar a [aplicação em produção aqui.](https://happy-ardinghelli-7b939a.netlify.app/)

## Metodologia
- ✔️ Criar um design base no Figma.
- ✔️ Criar uma aplicação utilizando React.
- ✔️ Integrar com o Linkedin para recuperar dados básicos. 
- ✔️ Utilizar Integração Contínua para automatizar os deploys.
- ✔️ Criar testes A/B utilizando Google Optmize

	### Criar um design base no Figma
	O primeiro passo foi criar um layout para me basear, tentando utilizar o mesmo padrão encontrado nos sites da Intera. Você pode visualizar como ficou no [Figma](https://www.figma.com/file/FJea220f8UwwfRTqnsbzCP/Untitled?node-id=0%3A1).

	### Criar uma aplicação utilizando React
	A aplicação foi criada utilizando Create-React-App, Styled-Components, e React-Dom para as rotas.
	
	Para utilizar localmente basta instalar os pacotes com o comando `yarn install` e depois iniciá-la com `yarn start`. Para buildar para produção basta rodar `yarn build`.

	Uma das exigências do teste era que o usuário pudesse recuperar dados básicos (como nome e foto) do seu linkedin utilizando uma api. A Integração com a API foi feita utilizando um microservice em Node.js, que fosse a ponte de comunicação entre a aplicação e o Linkedin. Este microservice está hospedado no Heroku e pode acessar seu repositório [bncunha/intera-test-backend (github.com)](https://github.com/bncunha/intera-test-backend).
	
	### CI/CD com CircleCI e Netlify
	Para otimizar o processo de deploy foi utilizado o CircleCi que faz o build da aplicação, realiza alguns testes e por fim aciona um Hook para o Netlify buildar a aplicação e publicá-la.

	### Testes A/B com Google Optimize
	Fiz uma pequena variação na página inicial do card para demonstrar o teste A/B, na variação foi feito uma pequena alteração na barra de pesquisa e no card do usuário.

## Conclusão
Foi bem desafiador realizar o deploy automático da aplicação, já tinha estudado um pouco sobre, mas nunca havia realmente colocado em prática. Espero que tenha conseguido atingir todos os objetivos e aprender cada vez mais.

Um sorriso de orelha a orelha! 😊
