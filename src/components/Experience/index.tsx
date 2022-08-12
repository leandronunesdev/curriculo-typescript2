import { Dados, Experiencia } from '../../types/perfil';

const Experience = (prop: Dados) => {
  const { experiencia } = prop.dados;

  return (
    <div className='experience'>
      <h2>Professional Experience</h2>

      {experiencia.map((item: Experiencia) => (
        <div className='experience-item'>
          <div>
            <h4>{item.cargo}</h4>
            <span>{item.periodo}</span>

            <strong>{item.empresa}</strong>
            <span>{item.local}</span>
          </div>
          <p>{item.conteudo}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
