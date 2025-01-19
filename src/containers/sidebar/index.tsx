import CardFiltro from '../../components/FiltroCard'
import * as s from './style'

const SideBar = () => (
  <>
    <s.Aside>
      <div>
        <s.Busca type="text" placeholder="Buscar" />
      </div>
      <s.Filtros>
        <CardFiltro legenda="Pedentes" contador={1} />
        <CardFiltro legenda="Concluidas" contador={2} />
        <CardFiltro legenda="Urgentes" contador={3} />
        <CardFiltro legenda="Importantes" contador={4} />
        <CardFiltro legenda="Normal" contador={5} />
        <CardFiltro legenda="Todas" contador={10} active />
      </s.Filtros>
    </s.Aside>
  </>
)

export default SideBar
