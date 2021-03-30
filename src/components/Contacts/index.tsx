import { ContatosDados } from "../../types/perfil"

const Contacts = (prop: ContatosDados) => {

  const {contato, tipo} = prop.dados

  return (
    <li>
      <div className="item-contato">
        <h4>{tipo}</h4>
        <p>{contato}</p>
      </div>
    </li>
  )
}

export default Contacts