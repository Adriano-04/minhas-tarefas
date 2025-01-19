import { useState } from 'react'
import * as S from './style'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [editando, setEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao value={descricao} />
      <S.ActionBar>
        {editando ? (
          <>
            <S.buttons>Salvar</S.buttons>
            <S.buttons onClick={() => setEditando(false)}>Cancelar</S.buttons>
          </>
        ) : (
          <>
            <S.buttons onClick={() => setEditando(true)}>Editar</S.buttons>
            <S.buttons>Remover</S.buttons>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
