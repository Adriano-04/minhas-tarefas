import * as style from './style'

export type Props = {
  active?: boolean
  contador: number
  legenda: string
}

const CardFiltro = ({ active, contador, legenda }: Props) => (
  <style.Card active={active}>
    <style.Contador>{contador}</style.Contador>
    <style.Label>{legenda}</style.Label>
  </style.Card>
)

export default CardFiltro
