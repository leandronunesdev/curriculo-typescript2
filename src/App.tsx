import React, { useState } from 'react';
import './App.css';
import Experience from './components/Experience';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Perfil } from './types/perfil';

function App() {
  const fakeAPI: Perfil = {
    nome: 'Leandro Nunes',
    ocupacao: 'Frontend Engineer',
    resumo: `32, Marylin's proud father`,
    perfilProfissional:
      'Frontend Engineer with knowledge in ReactJS, TypeScript and Redux',
    avatar:
      'https://avatars.githubusercontent.com/u/60386045?s=460&u=b81d71f87ddbf5a2da61abf86227ede788de7d32&v=4',
    contatos: [
      {
        id: 1,
        tipo: 'TELEPHONE',
        contato: '+55 41 996070390',
      },
      {
        id: 2,
        tipo: 'E-MAIL',
        contato: 'nunes.pessoal@gmail.com',
      },
      {
        id: 3,
        tipo: 'ADDRESS',
        contato: 'Curitiba, Paraná, Brazil',
      },
      {
        id: 4,
        tipo: 'LINKEDIN',
        contato: '/leandronunesdev',
      },
      {
        id: 5,
        tipo: 'GITHUB',
        contato: '/leandronunesdev',
      },
      {
        id: 6,
        tipo: 'WEBSITE',
        contato: 'www.leandronunes.dev',
      },
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'UFPR',
        curso: `Business Management Bachelor degree, 2017`,
        periodo: '2014 - 2017',
      },
      {
        id: 2,
        instituicao: 'UFPR',
        curso: 'Social Communication Bachelor degree',
        periodo: '2009 - 2013',
      },
    ],
    experiencia: [
      {
        id: 1,
        cargo: 'Junior Frontend Engineer',
        periodo: 'JUN 2021 - Present',
        empresa: 'Pistil Data',
        local: 'San Francisco, California (Remote)',
        conteudo:
          'Support in the maintenance and expansion of the mobile application, developed with React Native, Expo, TypeScript, ContextAPI, Styled Components, and other libraries',
      },
      {
        id: 2,
        cargo: 'Frontend Developer',
        periodo: 'SET 2020 - Present',
        empresa: 'FREELANCE',
        local: 'Curitiba',
        conteudo:
          'Websites development and maintenance for communication agencies',
      },
      {
        id: 3,
        cargo: 'Compliance Analyst',
        periodo: 'AUG 2016 - MAY 2021',
        empresa: 'EBANX',
        local: 'Curitiba',
        conteudo:
          'Assistance in the creation and development of the Risk and Compliance area. Assistance in the implementation of Scrum agile methodologies adapted to Risk and Compliance reality. Processes mapping and writing of Operational Procedures. Providing training to new analysts and other areas related to Compliance themes.',
      },
      {
        id: 4,
        cargo: 'Customer Service Analyst',
        periodo: 'NOV 2014 - JUL 2016',
        empresa: 'EBANX',
        local: 'Curitiba',
        conteudo:
          'Customer support through e-mail, telephone, chat and social networks',
      },
    ],
  };

  const [resposta] = useState(fakeAPI);

  return (
    <main>
      <Header dados={resposta} />
      <Sidebar dados={resposta} />
      <Experience dados={resposta} />
    </main>
  );
}

export default App;
