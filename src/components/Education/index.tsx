import { EducacaoDados } from "../../types/perfil"

const Education = (prop: EducacaoDados) => {

  const { curso, instituicao, periodo } = prop.dados

  return (
    <li>
      <h4>{curso}</h4>
      <p>{instituicao} {periodo}</p>
    </li>
  )
}

export default Education