import React, { useState } from 'react';
import Education from '../Education';
import { Contatos, Dados, Educacao } from '../../types/perfil';
import Contacts from '../Contacts';

const Sidebar = (prop: Dados) => {
  const { contatos, educacao } = prop.dados;

  const [contatosItens, mostrarContatosItens] = useState<Boolean>(false);

  const mostrar = () => {
    mostrarContatosItens(!contatosItens);
  };

  return (
    <aside>
      <div className='sidebar'>
        <h3>Contact</h3>

        <button onClick={mostrar}>Show Contact Info</button>

        {contatosItens && (
          <div className='lista-de-contatos'>
            <div className='item-contato'>
              {contatos.map((item: Contatos) => (
                <Contacts key={item.id} dados={item} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='sidebar'>
        <h3>Education</h3>
        <div className='lista-de-formacao'>
          {educacao.map((item: Educacao) => (
            <Education key={item.id} dados={item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
