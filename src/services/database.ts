export interface Conhecimento {
  nome: string;
  porcentagem: number;
}

export interface Experiencia {
  ocupacao: string;
  empresa: string;
  dataInicio: Date;
  dataFim?: Date;
  detalhes: string;
}

export interface Usuario {
  nome: string;
  imagem: any;
  ocupacao: string;
  sobre: string;
  email: string,
  sites: string[];
  conhecimentos: Conhecimento[],
  experiencias: Experiencia[]
}

export const Database = {
  init: () => {
    if (!Database.get()) {
      Database.save(JSON.parse(`[{"imagem":{"displayImage":"urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA","displayImage~":{"paging":{"count":10,"start":0,"links":[]},"elements":[{"artifact":"urn:li:digitalmediaMediaArtifact:(urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA,urn:li:digitalmediaMediaArtifactClass:profile-displayphoto-shrink_100_100)","authorizationMethod":"PUBLIC","data":{"com.linkedin.digitalmedia.mediaartifact.StillImage":{"mediaType":"image/jpeg","rawCodecSpec":{"name":"jpeg","type":"image"},"displaySize":{"width":100,"uom":"PX","height":100},"storageSize":{"width":100,"height":100},"storageAspectRatio":{"widthAspect":1,"heightAspect":1,"formatted":"1.00:1.00"},"displayAspectRatio":{"widthAspect":1,"heightAspect":1,"formatted":"1.00:1.00"}}},"identifiers":[{"identifier":"https://media-exp1.licdn.com/dms/image/C4D03AQFSKQN3s8rRJA/profile-displayphoto-shrink_100_100/0/1603205934853?e=1613606400&v=beta&t=QI_xcxJhec-wRxSEfwGAQUBGebDPn_dbhC1Rf1geNDo","index":0,"mediaType":"image/jpeg","file":"urn:li:digitalmediaFile:(urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA,urn:li:digitalmediaMediaArtifactClass:profile-displayphoto-shrink_100_100,0)","identifierType":"EXTERNAL_URL","identifierExpiresInSeconds":1613606400}]},{"artifact":"urn:li:digitalmediaMediaArtifact:(urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA,urn:li:digitalmediaMediaArtifactClass:profile-displayphoto-shrink_200_200)","authorizationMethod":"PUBLIC","data":{"com.linkedin.digitalmedia.mediaartifact.StillImage":{"mediaType":"image/jpeg","rawCodecSpec":{"name":"jpeg","type":"image"},"displaySize":{"width":200,"uom":"PX","height":200},"storageSize":{"width":200,"height":200},"storageAspectRatio":{"widthAspect":1,"heightAspect":1,"formatted":"1.00:1.00"},"displayAspectRatio":{"widthAspect":1,"heightAspect":1,"formatted":"1.00:1.00"}}},"identifiers":[{"identifier":"https://media-exp1.licdn.com/dms/image/C4D03AQFSKQN3s8rRJA/profile-displayphoto-shrink_200_200/0/1603205934853?e=1613606400&v=beta&t=2GzN7pCArT2acVXq5Q739BbBERZjbFK2Sh-Vv39OCM0","index":0,"mediaType":"image/jpeg","file":"urn:li:digitalmediaFile:(urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA,urn:li:digitalmediaMediaArtifactClass:profile-displayphoto-shrink_200_200,0)","identifierType":"EXTERNAL_URL","identifierExpiresInSeconds":1613606400}]},{"artifact":"urn:li:digitalmediaMediaArtifact:(urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA,urn:li:digitalmediaMediaArtifactClass:profile-displayphoto-shrink_400_400)","authorizationMethod":"PUBLIC","data":{"com.linkedin.digitalmedia.mediaartifact.StillImage":{"mediaType":"image/jpeg","rawCodecSpec":{"name":"jpeg","type":"image"},"displaySize":{"width":400,"uom":"PX","height":400},"storageSize":{"width":400,"height":400},"storageAspectRatio":{"widthAspect":1,"heightAspect":1,"formatted":"1.00:1.00"},"displayAspectRatio":{"widthAspect":1,"heightAspect":1,"formatted":"1.00:1.00"}}},"identifiers":[{"identifier":"https://media-exp1.licdn.com/dms/image/C4D03AQFSKQN3s8rRJA/profile-displayphoto-shrink_400_400/0/1603205934853?e=1613606400&v=beta&t=OQiwJhQkF-d-uI6FakzGFlj1V9GAfFzLICV9jp8Gx_I","index":0,"mediaType":"image/jpeg","file":"urn:li:digitalmediaFile:(urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA,urn:li:digitalmediaMediaArtifactClass:profile-displayphoto-shrink_400_400,0)","identifierType":"EXTERNAL_URL","identifierExpiresInSeconds":1613606400}]},{"artifact":"urn:li:digitalmediaMediaArtifact:(urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA,urn:li:digitalmediaMediaArtifactClass:profile-displayphoto-shrink_800_800)","authorizationMethod":"PUBLIC","data":{"com.linkedin.digitalmedia.mediaartifact.StillImage":{"mediaType":"image/jpeg","rawCodecSpec":{"name":"jpeg","type":"image"},"displaySize":{"width":800,"uom":"PX","height":800},"storageSize":{"width":800,"height":800},"storageAspectRatio":{"widthAspect":1,"heightAspect":1,"formatted":"1.00:1.00"},"displayAspectRatio":{"widthAspect":1,"heightAspect":1,"formatted":"1.00:1.00"}}},"identifiers":[{"identifier":"https://media-exp1.licdn.com/dms/image/C4D03AQFSKQN3s8rRJA/profile-displayphoto-shrink_800_800/0/1603205934853?e=1613606400&v=beta&t=_iHsKl2i0FjKLNzEoYzgFc_4HvABiId6lzqtyOVR8Js","index":0,"mediaType":"image/jpeg","file":"urn:li:digitalmediaFile:(urn:li:digitalmediaAsset:C4D03AQFSKQN3s8rRJA,urn:li:digitalmediaMediaArtifactClass:profile-displayphoto-shrink_800_800,0)","identifierType":"EXTERNAL_URL","identifierExpiresInSeconds":1613606400}]}]}},"nome":"Bruno Cunha","email":"bruno.silva.cunha@hotmail.com","sobre":"Estou sempre disposto a aprender novas tecnologias, aprecio o compartilhamento de conhecimento, experiências e o trabalho em equipe. Possuo experiência com Web Development, comunicação cliente-servidor, design de interfaces e web components. Utilizando linguagens e tecnologias como javascript (Node.js e Angular2+), Java, banco de dados MySQL e SQL Server. ","sites":["https://github.com/bncunha","https://www.instagram.com/bn.cunha/"],"conhecimentos":[{"porcentagem":80,"nome":"Javascript"},{"porcentagem":75,"nome":"Angular 2+"},{"porcentagem":60,"nome":"React"},{"porcentagem":80,"nome":"Web Components"}],"experiencias":[{"detalhes":"Trabalho full-time remoto, desenvolvendo marketplaces e painéis administrativos web responsivos utilizando Angular7+.","dataInicio":"2019-01-01T02:00:00.000Z","empresa":"Gopoints","ocupacao":"Desenvolvedor Fron-End"},{"ocupacao":"Desenvolvedor Front-End","empresa":"Wize Company","dataInicio":"2018-01-01T02:00:00.000Z","dataFim":"2019-01-01T02:00:00.000Z","detalhes":"Desenvolvimento de sistema Web utilizando Angular5+ com atualização de conteúdo em tempo real através de sockets e utilização de mapas e gráficos."},{"ocupacao":"Estagiário","empresa":"Justiça Federal","dataInicio":"2017-01-01T02:00:00.000Z","dataFim":"2017-12-01T02:00:00.000Z","detalhes":"Monitoramento e realização de rotinas de backups dos bancos de dados e emails. Desenvolvimento de sistema web em AngularJs para monitorar e acompanhar o status das storages."}]}]`));
    }
  },

  save: (usuarios: Usuario[]) => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  },

  get: (): Usuario[] => {
    return JSON.parse(localStorage.getItem('usuarios') || 'null');
  }

};