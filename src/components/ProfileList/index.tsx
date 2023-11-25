import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import ProfileProduct from '../ProfileProduct'
import fechar from '../../asset/images/icons/icon-close.png'
import * as S from './styles'

interface modalState extends CardapioItem {
  isVisible: boolean
}
type Props = {
  items: CardapioItem[]
}

const ProfileList = ({ items }: Props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState<modalState>({
    isVisible: false,
    id: 0,
    foto: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      id: 0,
      foto: '',
      nome: '',
      descricao: '',
      porcao: '',
      preco: 0
    })
  }
  const addToCart = (item: CardapioItem) => {
    dispatch(add(item))
    dispatch(open())
    closeModal()
  }

  return (
    <S.ListContent className="container">
      <S.List>
        {items.map((food) => (
          <li
            key={food.id}
            onClick={() =>
              setModal({
                isVisible: true,
                id: food.id,
                foto: food.foto,
                nome: food.nome,
                descricao: food.descricao,
                porcao: food.porcao,
                preco: food.preco
              })
            }
          >
            <ProfileProduct
              image={food.foto}
              title={food.nome}
              description={food.descricao}
            />
          </li>
        ))}
      </S.List>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent
          className="container
          "
        >
          <div>
            <img src={modal.foto} alt="" />
          </div>
          <S.DetailsModal>
            <h3>{modal.nome}</h3>
            <p>{modal.descricao}</p>
            <span>Serve: {modal.porcao}</span>
            <S.ButtonModal onClick={() => addToCart(modal)}>
              Adicionar ao carrinho - {formatPrice(modal.preco)}
            </S.ButtonModal>
          </S.DetailsModal>
          <S.BotaoFechar
            src={fechar}
            alt="botao fechar"
            onClick={() => closeModal()}
          />
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </S.ListContent>
  )
}

export default ProfileList
