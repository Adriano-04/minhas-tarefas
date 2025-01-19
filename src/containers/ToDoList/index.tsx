import Tarefa from '../../components/Tarefa'
import { Container } from './style'

const tarefas = [
  {
    titulo: 'estudar JS',
    descricao: 'estudar conceitos do javaScript',
    prioridade: 'importante',
    status: 'concluida'
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Fazer o exercicio C',
    prioridade: 'urgente',
    status: 'pendente'
  }
]

const ListaDeTarefa = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categorias&quot;</p>
    <ul>
      <li>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefa
