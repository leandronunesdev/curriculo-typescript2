import React, { useState } from "react";
import "./App.css"
import Experience from "./components/Experience";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Perfil } from "./types/perfil";

function App() {

  const fakeAPI: Perfil =  
    {
      nome: 'Leandro Nunes',
      ocupacao: 'Front-End Developer | React Developer',
      resumo: '30 anos, pai orgulhoso da Marilene',
      perfilProfissional: 'Analista de Compliance em transição de carreira. Tenho conhecimentos em ReactJS, TypeScript e Redux',
      avatar: 'https://avatars.githubusercontent.com/u/60386045?s=460&u=b81d71f87ddbf5a2da61abf86227ede788de7d32&v=4',
      contatos: [
        {
          id: 1,
          tipo: 'TELEFONE',
          contato: '41 996070390'
        },
        {
          id: 2,
          tipo: 'E-MAIL',
          contato: 'nunes.pessoal@gmail.com'
        },
        {
          id: 3,
          tipo: 'ENDEREÇO',
          contato: 'Curitiba, Paraná'
        },
        {
          id: 4,
          tipo: 'LINKEDIN',
          contato: '/nunesprofissional'
        },
        {
          id: 5,
          tipo: 'GITHUB',
          contato: '/leandronunesdev'
        },
        {
          id: 6,
          tipo: 'WEBSITE',
          contato: 'www.leandronunes.dev'
        },
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'UFPR',
          curso: 'Bacharel em Administração, 2017',
          periodo: '2014 - 2017'
        },
        {
          id: 2,
          instituicao: 'UFPR',
          curso: 'Bacharel em Comunicação Social',
          periodo: '2009 - 2013'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Front-End Developer',
          periodo: 'SET 2020 - Atual',
          empresa: 'FREELANCE',
          local: 'Curitiba',
          conteudo: 'Desenvolvimento de projetos pessoais e construção de portfolio'
        },
        {
          id: 2,
          cargo: 'Compliance Analyst',
          periodo: '2016 - ATUAL',
          empresa: 'EBANX',
          local: 'Curitiba',
          conteudo: 'Assistência na implementação e desenvolvimento da área de Risk and Compliance. Monitoramento de transações de clientes. Investigação de transações atípicas. Geração de reports à gerência executiva. Mapeamento de processos, redação de manuais, guias e Procedimentos Operacionais. Treinamento e suporte à área comercial relacionados à Compliance e Prevenção à Lavagem de Dinheiro.'
        },
        {
          id: 3,
          cargo: 'Customer Service Analyst',
          periodo: 'NOV 2014 - JUL 2016',
          empresa: 'EBANX',
          local: 'Curitiba',
          conteudo: 'Atendimento ao cliente via e-mail, telefone, chat e redes sociais'
        }
      ]
  }

  const [resposta] = useState(fakeAPI)

  return (
    <main>
      <Header dados={resposta}/>
      <Sidebar dados={resposta}/>
      <Experience dados={resposta}/>         
    </main>
  );
}

export default App;